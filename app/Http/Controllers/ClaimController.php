<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\ApprovalLog;
use Illuminate\Http\Request;
use App\Models\Claim;
use App\Models\ClaimStatusLog;
use App\Services\FetchesGstTax;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ClaimController extends Controller
{
    protected $fetchesGstTax;

    public function __construct(FetchesGstTax $fetchesGstTax)
    {
        $this->fetchesGstTax = $fetchesGstTax;
    }
    public function store(Request $request)
    {
        // dd($request->all());

        $user = auth()->user();

        // Validate the incoming request
        $validated = $request->validate([
            'payment_to' => 'required',
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
        $gstTax = (float) $this->fetchesGstTax->execute();

        $claim = [
            'created_by'            => $user->id,
            'payment_type'          => $requestData['payment_type'],
            'payment_category_id'   => $requestData['payment_category'],
            'currency_id'           => $requestData['currency'],
            'amount'                => $requestData['amount'],
            'purpose'               => $requestData['purpose'],
            'receipt_date'          => $requestData['receipt_date'],
            'receipt_file'          => $path ?? null,
            'payment_receiver_id'   => $requestData['payment_to'],

            // field to update later
            'gst_amount'            => $hasGst ? ($requestData['amount'] * $gstTax / 100) : 0,
            'gst_percent'           => $gstTax,
            'status'                => ApprovalStatus::PENDING_APPROVAL,
        ];

        // check user roles, if created by user with higer role, then dont need approval for lower role
        $userPrivilage = $user->privileges->first()->approval_role_id ?? null;
        if ($userPrivilage) {
            $claim['approval_status'] = $userPrivilage; // adjust the approval_status here on created
        }

        // Create a new claim record
        try {
            $claim = Claim::create($claim);
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
            $user = auth()->user();

            // if is admin show all
            $isAdmin = $user->role == 'admin';
            $isFinance = $user->role == 'finance';
            $hasPrivillageRoles = $user->privileges->first()->approval_role_id ?? null;
            if ($isAdmin || $hasPrivillageRoles || $isFinance) {
                $query = Claim::with('createdUser');
            } else {
                // if is normal user, can only show what they have submitted 
                $query = Claim::with('createdUser')->where('created_by', $user->id);
            }

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

    public function listPendingApproval(Request $request)
    {
        try {
            $user = $request->user();
            $privilegeRoleId = $user->privileges->first()->approval_role_id ?? null;

            // Step 1: Check if the user lacks privilege roles
            if (!$privilegeRoleId && !$user->role === 'finance') {
                return response()->json([
                    'success' => true,
                    'data' => [],
                    'message' => 'Claims listed successfully',
                ]);
            }

            // Initialize query
            $query = Claim::with(['createdUser', 'currencyObject', 'paymentCategory']);

            // Step 2: Check if the user is in the finance role
            if ($user->role === 'finance') {
                $query->where('status', ApprovalStatus::APPROVED);
            }

            // Step 3: Apply privilege-based filtering
            if ($privilegeRoleId) {
                $query->orWhere('approval_status', $privilegeRoleId - 1);
            }

            // Apply additional filters
            if ($paymentType = $request->input('paymentType')) {
                $query->where('payment_type', $paymentType);
            }

            if ($searchValue = $request->input('searchValue')) {
                $query->where(function ($q) use ($searchValue) {
                    $queryParam = ['payment_category', 'purpose'];
                    foreach ($queryParam as $param) {
                        $q->orWhere($param, 'like', "%{$searchValue}%");
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
        $data = Claim::with('currencyObject', 'createdUser', 'paymentToUser', 'statusLogs', 'paymentCategory')->find($id);

        // Check if data exists
        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => 'Data not found',
            ], 404);
        }

        $data->status_id = $data->status;
        // Format the status field (assuming ApprovalStatus::APPROVAL_STATUS_ID holds the status names)
        $data->status = ApprovalStatus::APPROVAL_STATUS_ID[$data->status] ?? 'Unknown Status';
        $data->next_approval_level =  $data->approval_status + 1;

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

        $currentApprovalLevel = $claim->approval_status;
        $nextApprovalLevel = $currentApprovalLevel + 1;

        if ($claim->status === ApprovalStatus::APPROVED || is_null($nextApprovalLevel)) {
            if ($claim->status !== ApprovalStatus::APPROVED) {
                $claim->update(['status' => ApprovalStatus::APPROVED]);
            }
            return response()->json(['message' => 'Claim fully approved.'], 200);
        }

        $userRole = auth()->user()->privileges->first()->approval_role_id ?? null;

        if ($userRole !== $nextApprovalLevel) {
            return response()->json(['error' => 'Insufficient privileges for this approval level.'], 403);
        }

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
        $claim->update(['approval_status' => $nextApprovalLevel]);

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

    public function paymentCompleted(Request $request, $id)
    {
        $claim = Claim::find($id);

        $validated = $request->validate([
            "paymentVoucherNumber" => 'required',
            "paymentDate" => 'required',
        ]);

        if (!$claim) {
            return response()->json(['error' => 'Claim not found.'], 404);
        }

        if ($claim->status < ApprovalStatus::APPROVED) {
            return response()->json(['error' => 'Claim has not been approved yet.'], 409);
        }

        if ($claim->status >= ApprovalStatus::PAYMENT_COMPLETED) {
            return response()->json(['error' => 'Claim has already been marked as Payment Completed.'], 409);
        }

        // todo-new: update here if anyone else can update
        if (auth()->user()->role != 'finance') {
            return response()->json(['error' => 'Insufficient privileges for this approval level.'], 403);
        }

        $claim->update([
            'status'                  => ApprovalStatus::PAYMENT_COMPLETED,
            "payment_voucher_number"  => $validated['paymentVoucherNumber'],
            "payment_date"            => $validated['paymentDate'],
        ]);

        ClaimStatusLog::create([
            'claim_id'      => $claim->id,
            'status'        => ApprovalStatus::PAYMENT_COMPLETED,
            'causer_id'     => auth()->id(),
        ]);
        return response()->json(['message' => 'Claim has been updated.'], 200);
    }
}
