<?php

namespace App\Http\Controllers;

use App\Models\PaymentGroup;
use App\Classes\ValueObjects\Constants\ApprovalStatus;
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
            $paymentGroups = PaymentGroup::with(['claims', 'claims.createdUser'])->paginate($perPage);

            // Transform claims for each payment group
            $paymentGroups->getCollection()->transform(function ($group) {
                $group->claims->transform(function ($claim) {
                    $currency = $claim->currencyObject;
                    $claim->currency = $currency->short_code;
                    $claim->status_id = $claim->status;
                    $claim->status_name = ApprovalStatus::APPROVAL_STATUS_ID[$claim->status] .
                        ($claim->status == ApprovalStatus::PENDING_APPROVAL ? ' • L' . ($claim->approval_status + 1) : '');
                    $claim->status = ApprovalStatus::APPROVAL_STATUS_ID[$claim->status];
                    $claim->payment_category_name = $claim->paymentCategory->name;
                    $claim->receipt_file = $this->getReceiptFileUrl($claim->receipt_file);
                    $claim->payment_receiver = $claim->paymentToUser;

                    return $claim;
                });

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
}
