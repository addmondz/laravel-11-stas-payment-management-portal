<?php

namespace App\Exports;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\Claim;
use App\Models\ClaimStatusLog;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class SummaryReportExport implements FromArray, ShouldAutoSize, WithStyles, WithDrawings
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

        $reportData[] = [''];
        $reportData[] = [''];
        $reportData[] = [''];
        $reportData[] = [''];
        $reportData[] = [''];
        $reportData[] = [''];
        $reportData[] = ["Summary Report"];

        $formattedFromDate = date('Y-m-d 00:00:00', strtotime($this->fromDate));
        $formattedToDate = date('Y-m-d 23:59:59', strtotime($this->toDate));
        $currentDate = date('m/d/y');

        $claims = Claim::whereBetween('created_at', [$formattedFromDate, $formattedToDate])->get();
        $groupedClaims = $claims->groupBy('payment_receiver_id');

        $currentRow = 8; // Start from row 2 after the title

        foreach ($groupedClaims as $receiverId => $categories) {
            // Use pre-fetched receiver names
            $receiver = PaymentReceiver::find($receiverId);

            // Add header information for each receiver
            $reportData[] = [''];
            $reportData[] = [''];
            $reportData[] = ["Pay To:", $receiver->name, "", "", "", "", "", "Date:", $currentDate];
            $reportData[] = ["Bank Name:", $receiver->bank_name];
            $reportData[] = ["Bank Account:", $receiver->bank_account_no];
            $reportData[] = ["Swift Code:", $receiver->swift_code];
            $reportData[] = ["Period:", "{$this->fromDate} - {$this->toDate}"];
            $currentRow += 5;

            // Add table headers
            $reportData[] = [
                "",
                "Category",
                "Total Transaction",
                "Currency",
                "Total Amount",
                "Gst",
                "Reviewed by",
                "Approved by",
                "Approved by",
            ];
            $currentRow++;

            $startRow = $currentRow + 1; // Start of the transaction summary section
            $totalTransactions = 0;
            $totalAmount = 0;
            $totalGst = 0;
            $categoryCounter = 1;

            foreach ($categories->groupBy('payment_category_id') as $categoryId => $categoryClaims) {
                $transactionCount = $categoryClaims->count();
                $amount = $categoryClaims->sum('amount');
                $gst_amount = $categoryClaims->sum('gst_amount');
                $currency = $categoryClaims->first()->currencyObject->short_code ?? $notAvailable;
                $categoryName = ucwords(PaymentCategory::find($categoryId)->name);
                $claimIds = $categoryClaims->pluck('id');
                $approvalLogs = ClaimStatusLog::whereIn('claim_id', $claimIds)->get();

                // Retrieve approvers
                $l1Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L1_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();
                $l2Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L2_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();
                $l3Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L3_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();

                // Add category data to report
                $reportData[] = [
                    $categoryCounter,
                    $categoryName,
                    $transactionCount,
                    $currency,
                    $this->formatPrice($amount),
                    $this->formatPrice($gst_amount),
                    implode(', ', $l1Approvers),
                    implode(', ', $l2Approvers),
                    implode(', ', $l3Approvers),
                ];
                $currentRow++;
                $categoryCounter++;
                $totalTransactions += $transactionCount;
                $totalAmount += $amount;
            }

            // Add totals row
            $reportData[] = [
                "",
                "TOTAL",
                $totalTransactions,
                "",
                $this->formatPrice($totalAmount),
                "",
                "",
                "",
            ];
            $currentRow++;
            $currentRow++;

            $this->transactionRanges[] = "A{$startRow}:I{$currentRow}"; // Store range for borders

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

    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('This is the company logo.');
        $drawing->setPath(public_path('images/logo-new.jpg'));
        $drawing->setWidth(2);
        $drawing->setHeight(100);
        $drawing->setCoordinates('A1');

        return [$drawing];
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
