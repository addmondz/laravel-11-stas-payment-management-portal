<?php

namespace App\Services;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\Claim;
use App\Models\ClaimStatusLog;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use App\Models\User;
use Exception;

class GeneratesTransactionsReportHtml
{
    private $requestBody;

    public function generate($requestBody)
    {
        $this->validateRequest($requestBody);
        return $this->formatDataAsHtml($this->getData());
    }

    private function validateRequest($requestBody)
    {
        $requiredFields = [
            'startDate',
            'endDate',
            // 'payment_to',
            // 'claim_ids_filters'
        ];
        foreach ($requiredFields as $field) {
            if (!$requestBody[$field]) {
                throw new Exception("$field is required.");
            }
        }

        $this->requestBody = $requestBody;
    }

    private function getData()
    {
        $startDate = date('Y-m-d 00:00:00', strtotime($this->requestBody['startDate']));
        $endDate = date('Y-m-d 23:59:59', strtotime($this->requestBody['endDate']));
        $currentDate = date('m/d/y');

        // Fetch claims grouped by payment_receiver_id
        $claims = Claim::whereBetween('created_at', [$startDate, $endDate]);

        $requestQuery = $this->requestBody;
        if (isset($requestQuery['payment_to']) && $requestQuery['payment_to'] != 'All') {
            $claims->whereIn('payment_receiver_id', explode(',', $requestQuery['payment_to']));
        }

        if (isset($requestQuery['claim_ids_filters']) && $requestQuery['claim_ids_filters'] != 'All') {
            $claims->whereIn('id', array_filter(explode(',', $requestQuery['claim_ids_filters']), fn($v) => $v !== ''));
        }

        $groupedClaims = $claims->get()->groupBy('payment_receiver_id');
        $reportData = [];
        $notAvailable = '-';
        $approvalStatus = ApprovalStatus::APPROVAL_STATUS_ID;

        $totalTransactions = $totalAmount = 0;

        foreach ($groupedClaims as $receiverId => $claims) {
            $paymentReceiver = PaymentReceiver::find($receiverId);
            $receiverName = $paymentReceiver->name ?? $notAvailable;
            $receiverBank = $paymentReceiver->bank_name ?? $notAvailable;
            $receiverAccount = $paymentReceiver->bank_account_no ?? $notAvailable;

            $reportData[] = ["Pay to:", $receiverName, "", "", "", "", "", "", "", "", "", "", "", "", "Report Date:", $currentDate];
            $reportData[] = ["Bank:", $receiverBank, "", "", "", "", "", "", "", "", "", "", "", "", "Period:", "{$this->requestBody['startDate']} - {$this->requestBody['endDate']}"];
            $reportData[] = ["Account:", $receiverAccount , "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

            // Add table headers
            $reportData[] = [
                "No.",
                'Payment ID',
                'Date',
                'Date of expenditure',
                'Status',
                'Remarks',
                'Currency',
                'GST',
                'Claim Amount',
                'Category',
                'Reviewed by',
                'Approved by',
                'Approved by',
                'Receipts',
                'Payment Voucher No',
                'Payment Made',
            ];

            $totalAmount = 0;
            $totalGst = 0;
            $transactionCounter = 1;

            foreach ($claims as $claim) {
                $reportData[] = [
                    $transactionCounter,
                    str_pad($claim->id, 5, '0', STR_PAD_LEFT),
                    $claim->created_at,
                    $claim->receipt_date,
                    $approvalStatus[$claim->status],
                    $claim->purpose,
                    $claim->currencyObject->short_code,
                    $claim->gst_amount,
                    $claim->amount,
                    ucwords(PaymentCategory::find($claim->payment_category_id)->name),
                    $claim->statusLogs()->where('status', ApprovalStatus::L1_APPROVAL)->first()->causer->name ?? $notAvailable,
                    $claim->statusLogs()->where('status', ApprovalStatus::L2_APPROVAL)->first()->causer->name ?? $notAvailable,
                    $claim->statusLogs()->where('status', ApprovalStatus::L3_APPROVAL)->first()->causer->name ?? $notAvailable,
                    $this->getReceiptFileUrl($claim->receipt_file),
                    $claim->payment_voucher_number,
                    $claim->payment_date,
                ];
                $transactionCounter++;
                $totalGst += $claim->gst_amount;
                $totalAmount += $claim->amount;
            }

            // Add totals row
            $reportData[] = [
                "",
                "",
                "",
                "",
                "",
                "",
                "TOTAL",
                $this->formatPrice($totalGst),
                $this->formatPrice($totalAmount),
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ];

            $reportData[] = [''];
        }
        return $reportData;
    }

    private function formatDataAsHtml($data)
    {
        $html = '<img src="' . url('') . '/images/logo-new.jpg" alt="Logo" style="width: 300px; height: auto;"><br><br>';
        
        $html .= '<h1 class="pageTitle text-xl underline font-bold">Transactions Report</h1> <br>';

        // Create the table structure
        $html .= '<table border-collapse: collapse;" cellpadding="5" cellspacing="0" width="100%">';

        $noBorderCounter = $noBorderCounterDefault = 3; // update here no border header

        // Populate the table with data
        foreach ($data as $item) {
            if (isset($item[0]) && is_array($item)) {
                $html .= '<tr>';

                if (count($item) == 1) {
                    $html .= '<td style="padding: 30px"></td>';
                    $html .= '</tr>';
                    $noBorderCounter = $noBorderCounterDefault;
                    continue;
                }

                foreach ($item as $cell) {
                    $borderClass = $noBorderCounter < 1 ? 'border: 1px solid black;' : '';
                    if ($cell == '') {
                        $html .= "<td style='$borderClass padding: 8px;'></td>";
                    } else {
                        $html .= "<td style='$borderClass padding: 8px;'>" . htmlspecialchars($cell) . "</td>";
                    }
                }
                $noBorderCounter--;
                $html .= '</tr>';
            }
        }

        // Close the table
        $html .= '</table>';

        return $html; // Return the formatted HTML
    }


    private function formatPrice($price)
    {
        return is_numeric($price) ? number_format(round($price, 2), 2, '.', ',') : (string)$price;
    }

    public function getReceiptFileUrl($url)
    {
        return $url ? url((app()->environment('local') ? '' : 'public/') . $url) : null;
    }
}
