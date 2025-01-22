<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\Claim;
use App\Models\ClaimStatusLog;
use App\Services\FetchesGstTax;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Exception;

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
            'gst_value' => 'nullable',
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
            'created_by' => $user->id,
            'payment_type' => $requestData['payment_type'],
            'payment_category_id' => $requestData['payment_category'],
            'currency_id' => $requestData['currency'],
            'amount' => $requestData['amount'],
            'purpose' => $requestData['purpose'],
            'receipt_date' => $requestData['receipt_date'],
            'receipt_file' => $path ?? null,
            'payment_receiver_id' => $requestData['payment_to'],

            // field to update later
            // 'gst_amount' => $hasGst ? ($requestData['amount'] * $gstTax / 100) : 0,
            'gst_amount' => $hasGst ? $requestData['gst_value'] : 0,
            'gst_percent' => $gstTax,
            'status' => ApprovalStatus::PENDING_APPROVAL,
        ];

        // check user roles, if created by user with higer role, then dont need approval for lower role
        $userPrivilage = $user->privileges->first()->approval_role_id ?? null;
        if ($userPrivilage) {
            $claim['approval_status'] = $userPrivilage; // adjust the approval_status here on created
        }

        if ($userPrivilage == ApprovalRoles::L3_APPROVAL_MEMBERS) {
            $claim['status'] = ApprovalStatus::APPROVED;
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

        if ($userPrivilage == ApprovalRoles::L3_APPROVAL_MEMBERS) {
            ClaimStatusLog::create([
                'claim_id' => $claim->id,
                'status' => ApprovalStatus::PENDING_APPROVAL,
                'causer_id' => $user->id,
            ]);
        }

        ClaimStatusLog::create([
            'claim_id' => $claim->id,
            'status' => $claim->status,
            'causer_id' => $user->id,
        ]);

        // Return success in JSON
        return response()->json([
            'success' => 'Claim created successfully!',
        ], 201);
    }

    public function update(Request $request, Claim $claim)
    {
        if ($claim->status >= 2) {
            throw new Exception("Claim has been approved. It can not be updated");
        }
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
            'gst_value' => 'nullable',
            'purpose' => 'required|string',
            'receipt_date' => 'required|date',
            'receipt' => 'nullable|mimes:jpeg,pdf,jpg,png|max:2048',
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

        $data = [
            // 'created_by' => $user->id,
            'payment_type' => $requestData['payment_type'],
            'payment_category_id' => $requestData['payment_category'],
            'currency_id' => $requestData['currency'],
            'amount' => $requestData['amount'],
            'purpose' => $requestData['purpose'],
            'receipt_date' => $requestData['receipt_date'],
            'receipt_file' => $path ?? null,
            'payment_receiver_id' => $requestData['payment_to'],

            // field to update later
            // 'gst_amount' => $hasGst ? ($requestData['amount'] * $gstTax / 100) : 0,
            'gst_amount' => $hasGst ? $requestData['gst_value'] : 0,
            'gst_percent' => $gstTax,
            'status' => ApprovalStatus::PENDING_APPROVAL,
        ];

        // check user roles, if created by user with higer role, then dont need approval for lower role
        $userPrivilage = $user->privileges->first()->approval_role_id ?? null;
        if ($userPrivilage) {
            $data['approval_status'] = $userPrivilage; // adjust the approval_status here on created
        }

        if ($userPrivilage == ApprovalRoles::L3_APPROVAL_MEMBERS) {
            $data['status'] = ApprovalStatus::APPROVED;
        }

        // Update claim record
        try {
            $claim->update($data);
        } catch (\Exception $e) {
            Log::error('Error creating claim: ' . $e->getMessage());

            return response()->json([
                'error' => 'An error occurred while creating the claim.',
            ], 500);
        }

        // Return success in JSON
        return response()->json([
            'success' => 'Claim updated successfully!',
        ], 201);
    }

    public function list(Request $request)
    {
        return $this->listFunction($request, false);
    }

    public function listPendingApproval(Request $request)
    {
        return $this->listFunction($request, true);
    }

    public function listFunction(Request $request, $isPendingApproval = false)
    {
        try {
            $user = $request->user();
            $isAdmin = $user->role === 'admin';
            $isFinance = $user->role === 'finance';
            $privilegeRoleId = $user->privileges->first()->approval_role_id ?? null;

            // Initialize query
            $query = Claim::with(['createdUser', 'currencyObject', 'paymentCategory']);

            if ($isPendingApproval) {
                if (!$privilegeRoleId && !$isFinance) {
                    return response()->json([
                        'success' => true,
                        'data' => [],
                        'message' => 'Pending Approval Payments listed successfully',
                    ]);
                }

                if ($isFinance) {
                    $query->where('status', ApprovalStatus::APPROVED);
                }

                if ($privilegeRoleId) {
                    $query->orWhere('approval_status', $privilegeRoleId - 1);
                }
            } else {
                if (!$isAdmin && !$privilegeRoleId && !$isFinance) {
                    $query->where('created_by', $user->id);
                }
            }

            // Apply filters
            $filters = ['id', 'payment_type', 'payment_category_id', 'currency_id', 'status'];
            foreach ($filters as $filter) {
                if ($request->has($filter)) {
                    $query->where($filter, $request->input($filter));
                }
            }

            if ($created_at = $request->input('created_at')) {
                $created_at_array = is_array($created_at) ? $created_at : explode(',', $created_at);
                if (count($created_at_array) == 2) {
                    $fromDate = date('Y-m-d 00:00:00', strtotime($created_at_array[0]));
                    $toDate = date('Y-m-d 23:59:59', strtotime($created_at_array[1]));
                    $query->whereBetween('created_at', [$fromDate, $toDate]);
                }
            }

            $approval_level = $request->input('approval_level');
            if (isset($approval_level)) {
                $query->where('approval_status', $approval_level);
            }

            if ($payment_receiver = $request->input('payment_receiver_id')) {
                if (strpos($payment_receiver, 'id-') === 0) {
                    $payment_receiver = substr($payment_receiver, strlen('id-'));
                }
                $query->where('payment_receiver_id', $payment_receiver);
            }

            if ($searchValue = $request->input('searchValue')) {
                $query->where(function ($q) use ($searchValue) {
                    $queryParams = ['payment_category', 'purpose'];
                    foreach ($queryParams as $param) {
                        $q->orWhere($param, 'like', "%{$searchValue}%");
                    }
                });
            }

            // Calculate total sums if not pending approval
            $totalSumByCountry = [];
            if (!$isPendingApproval) {
                $totalSumData = clone $query;
                $totalSumData->get()->each(function ($data) use (&$totalSumByCountry) {
                    $currency = $data->currencyObject;
                    $country = $currency->country;
                    $key = $country->short_code;

                    if (isset($totalSumByCountry[$key])) {
                        $totalSumByCountry[$key]['amount'] += $data->amount;
                    } else {
                        $totalSumByCountry[$key] = [
                            'amount' => $data->amount,
                            'country_name' => $country->name,
                            'currency' => $currency->short_code,
                        ];
                    }
                });
            }

            // Apply sorting
            $sortColumn = $request->input('sort_by', 'id');
            $sortDirection = $request->input('sort_order', $isPendingApproval ? 'asc' : 'desc');
            $query->orderBy($sortColumn, $sortDirection);

            // Paginate results
            $perPage = $request->get('per_page', 10);
            $datas = $query->paginate($perPage);

            // Transform data
            $datas->getCollection()->transform(function ($data) {
                $currency = $data->currencyObject;
                $data->currency = $currency->short_code;
                $data->status_id = $data->status;
                $data->status_name = ApprovalStatus::APPROVAL_STATUS_ID[$data->status] . ($data->status == ApprovalStatus::PENDING_APPROVAL ? ' • L' . ($data->approval_status + 1) : '');
                $data->status = ApprovalStatus::APPROVAL_STATUS_ID[$data->status];
                $data->payment_category_name = $data->paymentCategory->name;
                $data->receipt_file = $this->getReceiptFileUrl($data->receipt_file);
                $data->payment_receiver = $data->paymentToUser;

                return $data;
            });

            return response()->json([
                'success' => true,
                'data' => $datas,
                'total_sum_by_country' => $isPendingApproval ? null : $totalSumByCountry,
                'message' => $isPendingApproval ? 'Pending Approval Payments listed successfully' : 'Payments listed successfully',
            ]);
        } catch (\Exception $e) {
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
        // Fetch the claim data with the necessary relationships
        $data = Claim::with([
            'currencyObject',
            'createdUser',
            'paymentToUser.currency', // Load currency relationship for paymentToUser
            'statusLogs',
            'paymentCategory'
        ])->find($id);

        // Check if data exists
        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => 'Data not found',
            ], 404);
        }

        // Format and enhance the response
        $data->status_name = ApprovalStatus::APPROVAL_STATUS_ID[$data->status] . ($data->status == ApprovalStatus::PENDING_APPROVAL ? ' • L' . ($data->approval_status + 1) : '');
        $data->status_id = $data->status;
        $data->status = ApprovalStatus::APPROVAL_STATUS_ID[$data->status] ?? 'Unknown Status';
        $data->next_approval_level = $data->approval_status + 1;
        $data->receipt_file = $this->getReceiptFileUrl($data->receipt_file);

        // Map the status logs
        $data->status_log = $data->statusLogs->map(function ($log) {
            $logStatus = ApprovalStatus::APPROVAL_STATUS_ID_FOR_LOG_DISPLAY[$log->status] ?? 'Unknown Status';

            return [
                'id' => $log->id,
                'status' => $logStatus,  // Human-readable status name
                'created_at' => $log->created_at,
                'name' => $log->causer->name ?? 'Unknown User',  // Causer's name
            ];
        });

        // Add paymentToUser details with currency and country
        if ($data->paymentToUser && $data->paymentToUser->currency) {
            $data->payment_to_user = [
                'id' => $data->paymentToUser->id,
                'name' => $data->paymentToUser->name,
                'bank_name' => $data->paymentToUser->bank_name,
                'bank_account_no' => $data->paymentToUser->bank_account_no,
                'swift_code' => $data->paymentToUser->swift_code,
                'currency' => [
                    'id' => $data->paymentToUser->currency->id,
                    'name' => $data->paymentToUser->currency->name,
                    'country' => $data->paymentToUser->currency->country,
                ],
            ];
        } else {
            $data->payment_to_user = null;
        }

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

        if (! $claim) {
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
                'claim_id' => $claim->id,
                'status' => $claimLogStatus,
                'causer_id' => auth()->id(),
            ]);
        }
        $claim->update(['approval_status' => $nextApprovalLevel]);

        if ($nextApprovalLevel >= ApprovalRoles::L3_APPROVAL_MEMBERS) {
            $claim->update(['status' => ApprovalStatus::APPROVED]);
            // ClaimStatusLog::create([
            //     'claim_id' => $claim->id,
            //     'status' => ApprovalStatus::APPROVED,
            //     'causer_id' => auth()->id(),
            // ]);

            return response()->json(['message' => 'Claim approved at all levels.'], 200);
        }

        return response()->json(['message' => 'Claim approved at this level. Awaiting further approvals.'], 200);
    }

    public function groupApprove(Request $request, $ids)
    {
        $ids = explode(',', $ids);

        foreach ($ids as $id) {
            $response = $this->approveClaim($request, $id);

            if ($response->getStatusCode() !== 200) {
                return $response; // Return the error response immediately
            }
        }

        return response()->json(['message' => 'Group Approve Claim Success.'], 200);
    }

    public function paymentCompleted(Request $request, $id)
    {
        $claim = Claim::find($id);

        $validated = $request->validate([
            'paymentVoucherNumber' => 'required',
            'paymentDate' => 'required',
            'receipt' => 'required|mimes:jpeg,pdf,jpg,png|max:2048',
        ]);

        if (! $claim) {
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

        $claim->update([
            'status' => ApprovalStatus::PAYMENT_COMPLETED,
            'payment_voucher_number' => $validated['paymentVoucherNumber'],
            'payment_date' => $validated['paymentDate'],
            'payment_voucher_receipt_file' => $path ?? null,
        ]);

        ClaimStatusLog::create([
            'claim_id' => $claim->id,
            'status' => ApprovalStatus::PAYMENT_COMPLETED,
            'causer_id' => auth()->id(),
        ]);

        return response()->json(['message' => 'Claim has been updated.'], 200);
    }

    public function getReceiptFileUrl($url)
    {
        return $url ? (app()->environment('production') ? 'public/' : '') . $url : null;
    }

    public function listIds(Request $request)
    {
        $claims = Claim::query()->select('payment_receiver_id', 'id')->get()->groupBy('payment_receiver_id');

        $returnAry = $claims->mapWithKeys(function ($claimGroup, $paymentReceiverId) {
            return [$paymentReceiverId => $claimGroup->pluck('id')->toArray()];
        });

        // Add 'All' group with all claim IDs
        $returnAry['All'] = Claim::pluck('id')->toArray();

        return response()->json($returnAry);
    }

    public function delete(Request $request, $id)
    {
        try {
            // Attempt to find the claim by ID
            $claim = Claim::find($id);

            if ($claim->status >= 2) {
                throw new Exception("Claim has been approved. It can not be updated");
            }

            // Check if the claim exists
            if (!$claim) {
                return response()->json(['error' => 'Claim not found.'], 404);
            }

            // Delete the claim
            $claim->delete();

            return response()->json(['message' => 'Claim has been deleted.'], 200);
        } catch (\Exception $e) {
            // Handle any unexpected errors
            return response()->json(['error' => 'An error occurred while deleting the claim.'], 500);
        }
    }
}
