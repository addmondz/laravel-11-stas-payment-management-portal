<?php

namespace App\Exports;

use App\Models\Claim;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class SummaryReportExport implements FromArray, ShouldAutoSize, WithStyles
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

        $reportData[] = ["Summary Report"];

        $formattedFromDate = date('Y-m-d 00:00:00', strtotime($this->fromDate));
        $formattedToDate = date('Y-m-d 23:59:59', strtotime($this->toDate));
        $currentDate = date('m/d/y');

        $claims = Claim::whereBetween('created_at', [$formattedFromDate, $formattedToDate])->get();
        $groupedClaims = $claims->groupBy('payment_receiver_id');
        $currentRow = 2; // Start from row 2 after the title

        foreach ($groupedClaims as $receiverId => $categories) {
            $receiverName = PaymentReceiver::find($receiverId)->name ?? $notAvailable;

            $reportData[] = [''];
            $reportData[] = [''];
            $reportData[] = ["Pay to:", $receiverName, "", "", "", "", "Date:", $currentDate];
            $reportData[] = ["Period:", "{$this->fromDate} - {$this->toDate}"];
            $currentRow += 2;

            // Add table headers
            $reportData[] = [
                "",
                "Category",
                "Total Transaction",
                "Currency",
                "Total Amount",
                "Reviewed by",
                "Approved by",
                "Approved by",
            ];
            $currentRow++;

            $startRow = $currentRow + 1; // Start of the transaction summary section
            $totalTransactions = 0;
            $totalAmount = 0;
            $categoryCounter = 1;

            foreach ($categories->groupBy('payment_category_id') as $categoryId => $categoryClaims) {
                $transactionCount = $categoryClaims->count();
                $amount = $categoryClaims->sum('amount');
                $currency = $categoryClaims->first()->currencyObject->short_code ?? $notAvailable;
                $categoryName = ucwords(PaymentCategory::find($categoryId)->name);

                $reportData[] = [
                    $categoryCounter,
                    $categoryName,
                    $transactionCount,
                    $currency,
                    $this->formatPrice($amount),
                    "Wensin",
                    "Eddy",
                    "STAS Treasurer",
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

            $this->transactionRanges[] = "A{$startRow}:H{$currentRow}"; // Store range for borders

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
