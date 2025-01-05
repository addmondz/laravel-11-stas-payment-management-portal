<?php

namespace App\Exports;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\Claim;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class TransactionsReportExport implements FromArray, ShouldAutoSize, WithStyles
{
    private $fromDate;
    private $toDate;
    private $transactionRanges = []; // Store ranges for transaction summaries

    public function __construct($fromDate, $toDate)
    {
        $this->fromDate = $fromDate;
        $this->toDate = $toDate;
    }

    public function array(): array
    {
        $reportData = [];
        $notAvailable = '-';

        $reportData[] = ["Transactions Report"];

        $formattedFromDate = date('Y-m-d 00:00:00', strtotime($this->fromDate));
        $formattedToDate = date('Y-m-d 23:59:59', strtotime($this->toDate));
        $currentDate = date('m/d/y');

        $claims = Claim::whereBetween('created_at', [$formattedFromDate, $formattedToDate])->get();
        $groupedClaims = $claims->groupBy('payment_receiver_id');
        $currentRow = 2; // Start from row 2 after the title
        $approvalStatus = ApprovalStatus::APPROVAL_STATUS_ID;
        $notAvalable = '-';
        // $notAvalable = 'N/A';

        foreach ($groupedClaims as $receiverId => $claims) {
            $paymentReceiver = PaymentReceiver::find($receiverId);
            $receiverName = $paymentReceiver->name ?? $notAvailable;
            $receiverBank = $paymentReceiver->bank_name ?? $notAvailable;
            $receiverAccount = $paymentReceiver->bank_account_no ?? $notAvailable;

            $reportData[] = [''];
            $reportData[] = [''];
            $reportData[] = ["Pay to:", $receiverName, "", "", "", "", "", "", "", "", "", "", "", "Date:", $currentDate];
            $reportData[] = ["Bank:", $receiverBank, "", "", "", "", "", "", "", "", "", "", "", "Period:", "{$this->fromDate} - {$this->toDate}"];
            $reportData[] = ["Account:", $receiverAccount];

            $currentRow += 3;

            // Add table headers
            $reportData[] = [
                "",
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
            $currentRow++;

            $startRow = $currentRow + 1; // Start of the transaction summary section
            $totalAmount = 0;
            $totalGst = 0;
            $transactionCounter = 1;

            foreach ($claims as $claim) {
                $reportData[] = [
                    $transactionCounter,
                    $claim->created_at,
                    $claim->receipt_date,
                    $approvalStatus[$claim->status],
                    $claim->purpose,
                    $claim->currencyObject->short_code,
                    $claim->gst_amount,
                    $claim->amount,
                    ucwords(PaymentCategory::find($claim->payment_category_id)->name),
                    $claim->statusLogs()->where('status', ApprovalStatus::L1_APPROVAL)->first()->causer->name ?? $notAvalable,
                    $claim->statusLogs()->where('status', ApprovalStatus::L2_APPROVAL)->first()->causer->name ?? $notAvalable,
                    $claim->statusLogs()->where('status', ApprovalStatus::L3_APPROVAL)->first()->causer->name ?? $notAvalable,
                    'xxx',
                    $claim->payment_voucher_number,
                    $claim->payment_date,
                ];
                $currentRow++;
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
                "TOTAL",
                $this->formatPrice($totalGst),
                $this->formatPrice($totalAmount),
                "",
                "",
                "",
            ];
            $currentRow++;
            $currentRow++;

            $this->transactionRanges[] = "A{$startRow}:O{$currentRow}"; // Store range for borders

            $reportData[] = []; // Blank row for spacing
            $currentRow++;
        }

        return $reportData;
    }

    public function styles(Worksheet $sheet)
    {
        $styles = [];

        // Add borders to each transaction summary range
        foreach ($this->transactionRanges as $range) {
            $styles[$range] = [
                'borders' => [
                    'allBorders' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['argb' => '000000'],
                    ],
                ],
            ];
        }

        return $styles;
    }

    public function formatPrice($price)
    {
        // Check if the price is a valid number
        if (is_numeric($price)) {
            // Round to two decimal places and format as a string with two decimal places
            $price = number_format(round($price, 2), 2, '.', ',');
        }

        // Ensure the result is a string and return it
        return (string)$price;
    }
}
