<?php

namespace App\Services;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\{Claim, ClaimStatusLog, PaymentCategory, PaymentReceiver, User};
use Exception;

class GeneratesPaymentDetailReportHtml
{
    private array $requestBody;
    private const REQUIRED_FIELDS = ['startDate', 'endDate'];
    private const NOT_AVAILABLE = '-';
    private const COLSPAN = 19;

    public function generate(array $requestBody): string
    {
        $this->validateRequest($requestBody);
        return $this->generateReport();
    }

    private function validateRequest(array $requestBody): void
    {
        foreach (self::REQUIRED_FIELDS as $field) {
            if (!isset($requestBody[$field])) {
                throw new Exception("The field '{$field}' is required.");
            }
        }
        $this->requestBody = $requestBody;
    }

    private function generateReport(): string
    {
        $dateRange = $this->getDateRange();
        $claims = $this->getClaims($dateRange);
        $receivers = PaymentReceiver::whereIn('id', $claims->keys())
            ->get()
            ->keyBy('id');

        return $this->buildHtml($claims, $receivers);
    }

    private function getDateRange(): array
    {
        return [
            'start' => date('Y-m-d 00:00:00', strtotime($this->requestBody['startDate'])),
            'end' => date('Y-m-d 23:59:59', strtotime($this->requestBody['endDate']))
        ];
    }

    private function getClaims(array $dateRange)
    {
        $query = Claim::whereBetween('created_at', [$dateRange['start'], $dateRange['end']]);

        $requestQuery = $this->requestBody;
        if (isset($requestQuery['payment_to']) && $requestQuery['payment_to'] != 'All') {
            $query->whereIn('payment_receiver_id', explode(',', $requestQuery['payment_to']));
        }

        if (isset($requestQuery['claim_ids_filters']) && $requestQuery['claim_ids_filters'] != 'All') {
            $query->whereIn('id', array_filter(explode(',', $requestQuery['claim_ids_filters']), fn($v) => $v !== ''));
        }

        return $query->get()->groupBy('payment_receiver_id');
    }

    private function buildHtml($claims, $receivers): string
    {
        $html = $this->getHeaderHtml();

        foreach ($claims as $receiverId => $categories) {
            $html .= $this->buildReceiverSection(
                $receivers[$receiverId] ?? self::NOT_AVAILABLE,
                $categories
            );
        }

        return $html . '</table>';
    }

    private function getHeaderHtml(): string
    {
        $styles = '
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
                
                @page {
                    size: A3 landscape;
                    margin: 15mm 10mm;
                }

                table{
                    text-align: center;
                }
                
                body {
                    font-family: "Inter", sans-serif;
                    line-height: 1.4;
                    color: #1f2937;
                    font-size: 8pt;
                    margin: 0;
                    padding: 0;
                }
                
                .report-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #111827;
                    letter-spacing: -0.025em;
                    line-height: 1.2;
                }
                
                .table-container {
                    margin-top: 1rem;
                    width: 100%;
                    overflow-x: visible;
                }
                
                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                    background-color: #ffffff;
                    font-size: 7pt;
                }
                
                .data-table th {
                    background-color: #f3f4f6;
                    padding: 4px;
                    font-weight: 600;
                    text-align: center;
                    color: #374151;
                    border: 1px solid #e5e7eb;
                    white-space: nowrap;
                }
                
                .data-table td {
                    padding: 4px;
                    border: 1px solid #e5e7eb;
                    vertical-align: top;
                }
                
                .section-header {
                    background-color: #f9fafb;
                    padding: 0.75rem;
                    border-bottom: 2px solid #e5e7eb;
                    text-align: left;
                }
                
                .total-row {
                    background-color: #f3f4f6;
                    font-weight: 600;
                }
                
                .amount-cell {
                    font-family: "Monaco", monospace;
                    white-space: nowrap;
                }
                
                .meta-info {
                    color: #6b7280;
                    font-size: 0.75rem;
                }
                
                .approver-cell {
                    max-width: 100px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                
                /* Column widths */
                .data-table th:nth-child(1) { width: 3%; }
                .data-table th:nth-child(2) { width: 5%; }
                .data-table th:nth-child(3) { width: 5%; }
                .data-table th:nth-child(4) { width: 5%; }
                .data-table th:nth-child(5) { width: 5%; }
                .data-table th:nth-child(6) { width: 10%; }
                .data-table th:nth-child(7) { width: 4%; }
                .data-table th:nth-child(8) { width: 5%; }
                .data-table th:nth-child(9) { width: 7%; }
                .data-table th:nth-child(10) { width: 8%; }
                .data-table th:nth-child(11) { width: 8%; }
                .data-table th:nth-child(12) { width: 8%; }
                .data-table th:nth-child(13) { width: 8%; }
                .data-table th:nth-child(14) { width: 5%; }
                .data-table th:nth-child(15) { width: 5%; }
                .data-table th:nth-child(16) { width: 5%; }
                .data-table th:nth-child(17) { width: 5%; }

                .data-table td:nth-child(14) { 
                    width: 5%;
                    word-wrap: break-word; /* Allows breaking the string if it exceeds the container width */
                    white-space: pre-wrap;  /* Keeps whitespace and wraps long text */
                }
                .data-table td:nth-child(15) { 
                    width: 6%;
                    word-wrap: break-word; /* Allows breaking the string if it exceeds the container width */
                    white-space: pre-wrap;  /* Keeps whitespace and wraps long text */
                }
            </style>
        ';

        $logo = $this->getEncodedLogo();
        return $styles . $this->getTableHeader($logo);
    }

    private function getTableHeader(string $logo): string
    {
        return '
            <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
                <tr>
                    <td style="width: 180px; vertical-align: middle; padding: 0;">
                        <img src="data:image/jpeg;base64,' . $logo . '" 
                            alt="Logo" 
                            style="width: 180px; height: auto; display: block;">
                    </td>
                    <td style="vertical-align: middle; padding: 0 0 0 20px;">
                        <table style="width: 100%;">
                            <tr>
                                <td style="text-align: right;">
                                    <h1 class="report-title" style="margin: 0; padding: 0;">Payment Detail Report</h1>
                                    <div class="meta-info" style="margin-top: 5px;">Generated on: ' . date('F j, Y') . '</div>
                                    <div class="meta-info" style="margin-top: 5px;">Generated by: ' . \Illuminate\Support\Facades\Auth::user()->name . '</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <div class="table-container">
                <table class="data-table">';
    }

    private function getReceiverHeader(string $receiverName, PaymentReceiver $receiver): string
    {
        return '
            <tr>
                <td colspan="' . self::COLSPAN . '" class="section-header">
                    <div style="font-weight: 600; font-size: 1.2rem; margin-bottom:5px">Pay To: ' . htmlspecialchars($receiver->name) . '</div>
                    <div class="meta-info">Bank Name: ' .
            htmlspecialchars("{$receiver->bank_name}") .
            '</div>
                    <div class="meta-info">Bank Account: ' .
            htmlspecialchars("{$receiver->bank_account_no}") .
            '</div>
                    <div class="meta-info">Swift Code: ' .
            htmlspecialchars("{$receiver->swift_code}") .
            '</div>
                    <div class="meta-info" style="margin-top:5px; margin-bottom:5px;">Period: ' .
            htmlspecialchars("{$this->formatDate($this->requestBody['startDate'])} - {$this->formatDate($this->requestBody['endDate'])}") .
            '</div>
                </td>
            </tr>
            <tr>
                <th>No.</th>
                <th>Payment ID</th>
                <th>Date</th>
                <th>Date of expenditure</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Currency</th>
                <th>GST</th>
                <th>Claim Amount</th>
                <th>Category</th>
                <th>Created by</th>
                <th>Reviewed by</th>
                <th>Approved by</th>
                <th>Approved by</th>
                <th>Receipt File</th>
                <th>Payment Receipt</th>
                <th>Payment Voucher No</th>
                <th>Payment Made</th>
                <th>Payment Mode</th>
            </tr>';
    }

    private function buildReceiverSection(string $receiverName, $claims): string
    {
        $firstClaim = $claims->first();
        $receiver = PaymentReceiver::find($firstClaim->payment_receiver_id);

        $html = $this->getReceiverHeader($receiverName, $receiver);
        $counter = 1;
        $totals = ['transactions' => 0, 'amount' => 0, 'gst' => 0];

        foreach ($claims as $claim) {
            $rowData = $this->processClaimData($claim);
            $html .= $this->buildTableRow($counter++, $rowData);
            $totals = $this->updateTotals($totals, $rowData);
        }

        return $html . $this->buildTotalRow($totals) . '<tr><td colspan="' . self::COLSPAN . '" style="padding: 30px;"></td></tr>';
    }

    private function processClaimData(Claim $claim): array
    {
        $approvalLogs = $claim->statusLogs;

        return [
            'id' => str_pad($claim->id, 5, '0', STR_PAD_LEFT),
            'created_at' => $claim->created_at->format('d/m/Y'),
            'receipt_date' => $claim->receipt_date,
            'status' => $claim->status,
            'purpose' => $claim->purpose,
            'currency' => $claim->currencyObject->short_code ?? self::NOT_AVAILABLE,
            'gst_amount' => $claim->gst_amount,
            'amount' => $claim->amount,
            'category' => ucwords(PaymentCategory::find($claim->payment_category_id)->name),
            'approvers' => $this->getApprovers($approvalLogs),
            'receipt_file' => $this->getReceiptFileUrl($claim->receipt_file),
            'payment_voucher_receipt_file' => $this->getReceiptFileUrl($claim->payment_voucher_receipt_file),
            'payment_voucher_number' => $claim->payment_voucher_number,
            'payment_date' => $claim->payment_date,
            'payment_mode' => $claim->payment_mode,
            'created_by' => $claim->createdUser->name,
        ];
    }

    private function getEncodedLogo(): string
    {
        $imagePath = public_path('images/logo-new.jpg');
        return base64_encode(file_get_contents($imagePath));
    }

    private function buildTableRow(int $counter, array $rowData): string
    {
        $receipt_file_html = $rowData['receipt_file'] ? '<a target="_blank" href="' . $rowData['receipt_file'] . '">Click</a>' : '';
        $payment_voucher_file_html = $rowData['payment_voucher_receipt_file'] ? '<a target="_blank" href="' . $rowData['payment_voucher_receipt_file'] . '">Click</a>' : '';

        $approvalStatus = ApprovalStatus::APPROVAL_STATUS_ID;
        return '
            <tr>
                <td style="text-align: center;">' . $counter . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['id']) . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['created_at']) . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['receipt_date']) . '</td>
                <td style="text-align: center;">' . htmlspecialchars($approvalStatus[$rowData['status']]) . '</td>
                <td>' . htmlspecialchars($rowData['purpose']) . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['currency']) . '</td>
                <td class="amount-cell">' . $this->formatPrice($rowData['gst_amount']) . '</td>
                <td class="amount-cell">' . $this->formatPrice($rowData['amount']) . '</td>
                <td>' . htmlspecialchars($rowData['category']) . '</td>
                <td>' . htmlspecialchars($rowData['created_by']) . '</td>
                <td class="approver-cell">' . ($rowData['approvers']['l1'] ? htmlspecialchars(implode(', ', $rowData['approvers']['l1'])) : '-') . '</td>
                <td class="approver-cell">' . ($rowData['approvers']['l2'] ? htmlspecialchars(implode(', ', $rowData['approvers']['l2'])) : '-') . '</td>
                <td class="approver-cell">' . ($rowData['approvers']['l3'] ? htmlspecialchars(implode(', ', $rowData['approvers']['l3'])) : '-') . '</td>
                <td style="text-align: center;">' . $receipt_file_html . '</td>
                <td style="text-align: center;">' . $payment_voucher_file_html . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['payment_voucher_number']) . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['payment_date']) . '</td>
                <td style="text-align: center;">' . htmlspecialchars($rowData['payment_mode']) . '</td>
            </tr>';
    }

    private function buildTotalRow(array $totals): string
    {
        return '
            <tr class="total-row">
                <td colspan="7"></td>
                <td class="amount-cell">' . $this->formatPrice($totals['gst']) . '</td>
                <td class="amount-cell">' . $this->formatPrice($totals['amount']) . '</td>
                <td colspan="10"></td>
            </tr>';
    }

    private function updateTotals(array $totals, array $rowData): array
    {
        return [
            'transactions' => $totals['transactions'] + 1,
            'amount' => $totals['amount'] + $rowData['amount'],
            'gst' => ($totals['gst'] ?? 0) + $rowData['gst_amount']
        ];
    }

    public function getReceiptFileUrl($url)
    {
        return $url ? url((app()->environment('local') ? '' : 'public/') . $url) : null;
    }

    private function getApprovers($logs): array
    {
        $getNames = fn($status) => User::whereIn('id', $logs->where('status', $status)->pluck('causer_id'))
            ->pluck('name')
            ->toArray();

        return [
            'l1' => $getNames(ApprovalStatus::L1_APPROVAL),
            'l2' => $getNames(ApprovalStatus::L2_APPROVAL),
            'l3' => $getNames(ApprovalStatus::L3_APPROVAL)
        ];
    }

    private function formatPrice($price): string
    {
        return is_numeric($price) ? number_format(round($price, 2), 2, '.', ',') : (string)$price;
    }

    private function formatDate($date)
    {
        if (!$date) {
            return null;
        }

        return date('d/m/Y', strtotime($date));
    }
}
