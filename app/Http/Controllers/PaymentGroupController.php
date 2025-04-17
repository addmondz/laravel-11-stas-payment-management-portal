<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\PaymentGroup;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentGroupController extends Controller
{
    public function list(Request $request)
    {
        try {
            // Set pagination limit, default to 10 if not provided
            $perPage = $request->query('per_page', 10);

            // Fetch payment groups with their associated claims using pagination
            $query = PaymentGroup::orderBy('id', 'desc')->with(['claims', 'claims.createdUser']);

            // Apply filters
            $filters = ['id', 'payment_voucher_number'];
            foreach ($filters as $filter) {
                if ($request->has($filter)) {
                    $query->where($filter, $request->input($filter));
                }
            }

            if (($payment_date = $request->input('payment_date')) !== null) {
                $dates = is_array($payment_date) ? $payment_date : explode(',', $payment_date);
                if (count($dates) === 2) {
                    $query->whereBetween('payment_date', [
                        Carbon::parse($dates[0])->startOfDay(),
                        Carbon::parse($dates[1])->endOfDay(),
                    ]);
                }
            }

            $paymentGroups = $query->paginate($perPage);

            // Transform claims for each payment group
            $paymentGroups->getCollection()->transform(function ($group) {
                $group->claims->transform(function ($claim) {
                    $currency = $claim->currencyObject ?? null;
                    $claim->currency = $currency?->short_code ?? null;
                    $claim->status_id = $claim->status;
                    $claim->status_name = ApprovalStatus::APPROVAL_STATUS_ID[$claim->status] .
                        ($claim->status == ApprovalStatus::PENDING_APPROVAL ? ' • L' . ($claim->approval_status + 1) : '');
                    $claim->status = ApprovalStatus::APPROVAL_STATUS_ID[$claim->status];
                    $claim->payment_category_name = optional($claim->paymentCategory)->name;
                    $claim->receipt_file = $this->getReceiptFileUrl($claim->receipt_file);
                    $claim->payment_receiver = $claim->paymentToUser;

                    return $claim;
                });

                $firstClaim = $group->claims->first();
                $group->currency = $firstClaim && $firstClaim->currencyObject
                    ? $firstClaim->currencyObject->short_code
                    : null;

                $group->sum_claims = $group->claims->sum('amount');
                $group->claimIds = implode(',', $group->claims->pluck('id')->toArray());

                return $group;
            });

            return response()->json([
                'success' => true,
                'data' => $paymentGroups,
                'message' => 'Payment Groups listed successfully',
            ]);
        } catch (\Exception $e) {
            Log::error('Error listing Payment Groups', [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while listing Payment Groups',
            ], 500);
        }
    }

    public function getReceiptFileUrl($url)
    {
        return $url ? (app()->environment('production') ? 'public/' : '') . $url : null;
    }

    public function deletePaymentGroup(Request $request, $groupId)
    {
        $paymentGroup = PaymentGroup::find($groupId);

        if (!$paymentGroup) {
            return response()->json(['error' => 'Payment Group not found.'], 404);
        }

        foreach ($paymentGroup->paymentGroupsChild as $paymentGroupChild) {
            $claim = $paymentGroupChild->claim;
            $claim->update(['status' => ApprovalStatus::APPROVED]);

            $claim->payment_voucher_number        = null;
            $claim->payment_date                  = null;
            $claim->payment_voucher_receipt_file  = null;
            $claim->payment_mode                  = null;

            $claim->statusLogs()->latest()->first()?->delete();
        }

        $paymentGroup->delete();

        return response()->json(['message' => 'Payment Group has been deleted.'], 200);
    }

}
