<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\ApprovalLog;
use Illuminate\Http\Request;
use App\Models\Claim;
use App\Models\ClaimStatusLog;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ClaimController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());

        $user = auth()->user();

        // Validate the incoming request
        $validated = $request->validate([
            'payment_type' => 'required|in:reimbursement,external_payment',
            'payment_category' => 'required|string',
            'currency' => 'required',
            'amount' => 'required|numeric',
            'gst' => 'required|in:1,0',
            'purpose' => 'required|string',
            'receipt_date' => 'required|date',
            'receipt' => 'required|mimes:jpeg,pdf,jpg,png|max:2048',
        ]);

        // // Handle the file upload if it exists
        // if ($request->hasFile('receipt')) {
        //     $path = $request->file('receipt')->store('receipts', 'public');
        // }

        // store at public folder
        if ($request->hasFile('receipt')) {
            $file = $request->file('receipt');

            // Generate a unique name for the file to avoid conflicts
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();

            // Store the file directly in the public folder
            $file->move(public_path('receipts'), $filename);

            // Save the file path to the database or return the filename
            $path = 'receipts/' . $filename;
        }


        $requestData = $request->all();

        $hasGst = filter_var($requestData['gst'], FILTER_VALIDATE_BOOLEAN);

        // Create a new claim record
        try {
            $claim = Claim::create([
                'created_by'            => $user->id,
                'payment_type'          => $requestData['payment_type'],
                'payment_category_id'   => $requestData['payment_category'],
                'currency_id'           => $requestData['currency'],
                'amount'                => $requestData['amount'],
                'purpose'               => $requestData['purpose'],
                'receipt_date'          => $requestData['receipt_date'],
                'receipt_file'          => $path ?? null,

                // field to update later
                'payment_to'            => $user->id,
                'gst_amount'            => $hasGst ? ($requestData['amount'] * 0.06) : 0,
                'gst_percent'           => '6',
                'bank_account_id'       => '1',
                'status'                => ApprovalStatus::PENDING_APPROVAL,
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating claim: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while creating the claim.',
            ], 500);
        }

        ClaimStatusLog::create([
            'claim_id'      => $claim->id,
            'status'        => $claim->status,
            'causer_id'     => $user->id,
        ]);

        // Return success in JSON
        return response()->json([
            'success' => 'Claim created successfully!',
        ], 201);
    }

    public function list(Request $request)
    {
        try {
            // Define the base query
            $query = Claim::query();

            if ($request->input('paymentType')) {
                $query->where('payment_type', $request->input('paymentType'));
            }

            if ($request->input('searchValue')) {
                $queryParam = ['payment_category', 'purpose'];
                $searchValue = $request->input('paymentType');
                $query->where(function ($query) use ($queryParam, $searchValue) {
                    foreach ($queryParam as $q) {
                        $query->orWhere($q, 'like', '%' . $searchValue . '%');
                    }
                });
            }

            // Apply sorting if provided
            $sortColumn = $request->input('sort.column', 'id');
            $sortDirection = $request->input('sort.direction', 'asc');
            $query->orderBy($sortColumn, $sortDirection);

            // Paginate the results
            $perPage = $request->get('per_page', 10); // Default to 10 items per page
            $datas = $query->paginate($perPage);

            $datas->getCollection()->transform(function ($data) {
                $data->currency = $data->currencyObject->short_code;
                $data->status = ApprovalStatus::APPROVAL_STATUS_ID[$data->status];
                $data->payment_category_name = $data->paymentCategory->name;
                return $data;
            });

            // Return the response in a structured format
            return response()->json([
                'success' => true,
                'data' => $datas,
                'message' => 'Claims listed successfully',
            ]);
        } catch (\Exception $e) {
            // Log the error with detailed information
            Log::error('Error listing Claims', [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while listing Claims',
            ], 500);
        }
    }

    public function fetchData(Request $request, $id)
    {
        // Fetch the claim data with the relationships
        $data = Claim::with('currencyObject', 'createdUser', 'paymentToUser', 'statusLogs')->find($id);

        // Check if data exists
        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => 'Data not found',
            ], 404);
        }

        // Format the status field (assuming ApprovalStatus::APPROVAL_STATUS_ID holds the status names)
        $data->status = ApprovalStatus::APPROVAL_STATUS_ID[$data->status] ?? 'Unknown Status';

        $data->status_log = $data->statusLogs->map(function ($log) {
            $logStatus = ApprovalStatus::APPROVAL_STATUS_ID[$log->status] ?? 'Unknown Status';
            return [
                'id' => $log->id,
                'status' => $logStatus,  // Human-readable status name
                'created_at' => $log->created_at,
                'name' => $log->causer->name ?? 'Unknown User',  // Causer's name
            ];
        });

        // Return the data as a JSON response
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => 'Claim fetched successfully',
        ], 200);
    }

    public function approveClaim(Request $request, $id)
    {
        $claim = Claim::find($id);

        if (!$claim) {
            return response()->json(['error' => 'Claim not found.'], 404);
        }

        $currentApprovalLevel = $claim->approvalLogs->max('approval_level') ?? 0;
        $nextApprovalLevel = $currentApprovalLevel < ApprovalRoles::L3_APPROVAL_MEMBERS
            ? $currentApprovalLevel + 1
            : null;

        if ($claim->status === ApprovalStatus::APPROVED || is_null($nextApprovalLevel)) {
            if ($claim->status !== ApprovalStatus::APPROVED) {
                $claim->update(['status' => ApprovalStatus::APPROVED]);
            }
            return response()->json(['message' => 'Claim fully approved.'], 200);
        }

        $userRole = auth()->user()->privileges->first()->privilege_id ?? null;

        if ($userRole !== $nextApprovalLevel) {
            return response()->json(['error' => 'Insufficient privileges for this approval level.'], 403);
        }

        ApprovalLog::create([
            'claim_id' => $claim->id,
            'approval_level' => $nextApprovalLevel,
            'user_id' => auth()->id(),
        ]);

        $claimLogStatus = null;
        switch ($nextApprovalLevel) {
            case 1:
                $claimLogStatus = ApprovalStatus::L1_APPROVAL;
                break;
            case 2:
                $claimLogStatus = ApprovalStatus::L2_APPROVAL;
                break;
            case 3:
                $claimLogStatus = ApprovalStatus::L3_APPROVAL;
                break;
        }

        if ($claimLogStatus) {
            ClaimStatusLog::create([
                'claim_id'      => $claim->id,
                'status'        => $claimLogStatus,
                'causer_id'     => auth()->id(),
            ]);
        }

        if ($nextApprovalLevel >= ApprovalRoles::L3_APPROVAL_MEMBERS) {
            $claim->update(['status' => ApprovalStatus::APPROVED]);
            ClaimStatusLog::create([
                'claim_id'      => $claim->id,
                'status'        => ApprovalStatus::APPROVED,
                'causer_id'     => auth()->id(),
            ]);
            return response()->json(['message' => 'Claim approved at all levels.'], 200);
        }

        return response()->json(['message' => 'Claim approved at this level. Awaiting further approvals.'], 200);
    }
}
