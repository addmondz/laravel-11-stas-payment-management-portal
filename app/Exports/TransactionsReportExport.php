<?php

namespace App\Exports;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\Claim;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class TransactionsReportExport implements FromArray, ShouldAutoSize, WithStyles, WithDrawings
{
    private $request;
    private $fromDate;
    private $toDate;
    private $transactionRanges = []; // Store ranges for transaction summaries

    public function __construct($request, $fromDate, $toDate)
    {
        $this->request = $request;
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
        $reportData[] = ["Transactions Report"];

        $formattedFromDate = date('Y-m-d 00:00:00', strtotime($this->fromDate));
        $formattedToDate = date('Y-m-d 23:59:59', strtotime($this->toDate));
        $currentDate = date('m/d/y');

        $claims = Claim::whereBetween('created_at', [$formattedFromDate, $formattedToDate]);

        $requestQuery = $this->request->query->all();
        if (isset($requestQuery['payment_to']) && $requestQuery['payment_to'] != 'All') {
            $claims->whereIn('payment_receiver_id', explode(',', $requestQuery['payment_to']));
        }

        if (isset($requestQuery['claim_ids_filters']) && $requestQuery['claim_ids_filters'] != 'All') {
            $claims->whereIn('id', array_filter(explode(',', $requestQuery['claim_ids_filters']), fn($v) => $v !== ''));
        }

        $claims = $claims->get();
        $groupedClaims = $claims->groupBy('payment_receiver_id');
        $currentRow = 8; // Start from row 2 after the title
        $approvalStatus = ApprovalStatus::APPROVAL_STATUS_ID;
        $notAvalable = '-';
        // $notAvalable = 'N/A';

        foreach ($groupedClaims as $receiverId => $claims) {
            $paymentReceiver = PaymentReceiver::find($receiverId);
            $receiverName = $paymentReceiver->name ?? $notAvailable;
            $receiverBank = $paymentReceiver->bank_name ?? $notAvailable;
            $receiverAccount = $paymentReceiver->bank_account_no ?? $notAvailable;
            $swiftCode = $paymentReceiver->swift_code ?? $notAvailable;

            $reportData[] = [''];
            $reportData[] = [''];
            $reportData[] = ["Pay To:", $receiverName, "", "", "", "", "", "", "", "", "", "", "", "", "", "Date:", $currentDate];
            $reportData[] = ["Bank Name:", $receiverBank, "", "", "", "", "", "", "", "", "", "", "", "", "", "Period:", "{$this->fromDate} - {$this->toDate}"];
            $reportData[] = ["Bank Account:", $receiverAccount];
            $reportData[] = ["Swift Code:", $swiftCode];

            $currentRow += 4;

            // Add table headers
            $reportData[] = [
                "",
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
                'Payment Mode',
            ];
            $currentRow++;

            $startRow = $currentRow + 1; // Start of the transaction summary section
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
                    $claim->statusLogs()->where('status', ApprovalStatus::L1_APPROVAL)->first()->causer->name ?? $notAvalable,
                    $claim->statusLogs()->where('status', ApprovalStatus::L2_APPROVAL)->first()->causer->name ?? $notAvalable,
                    $claim->statusLogs()->where('status', ApprovalStatus::L3_APPROVAL)->first()->causer->name ?? $notAvalable,
                    $this->getReceiptFileUrl($claim->receipt_file),
                    $claim->payment_voucher_number,
                    $claim->payment_date,
                    $claim->payment_mode,
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

            $this->transactionRanges[] = "A{$startRow}:Q{$currentRow}"; // Store range for borders

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

    public function getReceiptFileUrl($url)
    {
        return $url ? url((app()->environment('local') ? '' : 'public/') . $url) : null;
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
}
