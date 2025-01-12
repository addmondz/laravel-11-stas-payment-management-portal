<?php

namespace App\Services;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Models\Claim;
use App\Models\ClaimStatusLog;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Log;

class GeneratesSummaryReportHtml
{
    private $requestBody;

    public function generate($requestBody)
    {
        $this->validateRequest($requestBody);
        return $this->generateReport();
    }

    private function validateRequest($requestBody)
    {
        $requiredFields = [
            'startDate',
            'endDate',
        ];

        foreach ($requiredFields as $field) {
            if (!isset($requestBody[$field])) {
                throw new Exception("The field '{$field}' is required.");
            }
        }

        $this->requestBody = $requestBody;
    }

    private function generateReport()
    {
        $startDate = date('Y-m-d 00:00:00', strtotime($this->requestBody['startDate']));
        $endDate = date('Y-m-d 23:59:59', strtotime($this->requestBody['endDate']));
        $currentDate = date('m/d/y');

        $claims = Claim::whereBetween('created_at', [$startDate, $endDate])
            ->get()
            ->groupBy('payment_receiver_id');

        $receivers = PaymentReceiver::whereIn('id', $claims->keys())->pluck('name', 'id');
        $notAvailable = '-';

        // Start HTML generation
        $html = '<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />';
        $cssFile = $this->getCssFile();
        if (!$cssFile) {
            $html .= '<style>@import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css");</style>';
        } else {
            $html .= '<style>@import url("' . $cssFile . '");</style>';
        }

        $imagePath = public_path('images/logo-new.jpg');
        $base64Image = base64_encode(file_get_contents($imagePath));

        $html .= '
            <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
                <tr>
                    <td style="width: 300px; padding-right: 20px; vertical-align: middle;">
                        <img src="data:image/jpeg;base64,' . $base64Image . '" alt="Logo" style="width: 100%; height: auto;">
                    </td>
                    <td style="vertical-align: middle; text-align: left;">
                        <h1 style="font-size: 2rem; margin: 0; text-align:right;">Summary Report</h1>
                    </td>
                </tr>
            </table>
            <br><br>
            <table style="border-collapse: collapse; width: 100%;" cellpadding="5" cellspacing="0">';

        foreach ($claims as $receiverId => $categories) {
            $receiverName = $receivers[$receiverId] ?? $notAvailable;

            $html .= '
            <tr>
                <!--<td colspan="8"><strong>Pay to:</strong> ' . htmlspecialchars($receiverName) . ' ( ' . $receiverId . ' )</td> -->
                <td colspan="8"><strong>Pay to:</strong> ' . htmlspecialchars($receiverName) . '</td>
            </tr>
            <tr>
                <td colspan="8"><strong>Period:</strong> ' . htmlspecialchars("{$this->requestBody['startDate']} - {$this->requestBody['endDate']}") . '</td>
            </tr>
            <tr>
                <th style="border: 1px solid black;">No.</th>
                <th style="border: 1px solid black;">Category</th>
                <th style="border: 1px solid black;">Total Transaction</th>
                <th style="border: 1px solid black;">Currency</th>
                <th style="border: 1px solid black;">Total Amount</th>
                <th style="border: 1px solid black;">Reviewed by</th>
                <th style="border: 1px solid black;">Approved by</th>
                <th style="border: 1px solid black;">Approved by</th>
            </tr>';

            $totalTransactions = $totalAmount = 0;
            $categoryCounter = 1;

            foreach ($categories->groupBy('payment_category_id') as $categoryId => $categoryClaims) {
                foreach ($categoryClaims->groupBy('currency_id') as $currencyId => $currencyClaims) {
                    $transactionCount = $currencyClaims->count();
                    $amount = $currencyClaims->sum('amount');
                    $currency = $currencyClaims->first()->currencyObject->short_code ?? $notAvailable;
                    $categoryName = ucwords(PaymentCategory::find($categoryId)->name);

                    $approvalLogs = ClaimStatusLog::whereIn('claim_id', $currencyClaims->pluck('id'))->get();
                    $l1Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L1_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();
                    $l2Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L2_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();
                    $l3Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L3_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();

                    $html .= '
                    <tr>
                        <td style="border: 1px solid black;">' . $categoryCounter++ . '</td>
                        <td style="border: 1px solid black;">' . htmlspecialchars($categoryName) . '</td>
                        <td style="border: 1px solid black;">' . $transactionCount . '</td>
                        <td style="border: 1px solid black;">' . htmlspecialchars($currency) . '</td>
                        <td style="border: 1px solid black;">' . $this->formatPrice($amount) . '</td>
                        <td style="border: 1px solid black;">' . htmlspecialchars(implode(', ', $l1Approvers)) . '</td>
                        <td style="border: 1px solid black;">' . htmlspecialchars(implode(', ', $l2Approvers)) . '</td>
                        <td style="border: 1px solid black;">' . htmlspecialchars(implode(', ', $l3Approvers)) . '</td>
                    </tr>';

                    $totalTransactions += $transactionCount;
                    $totalAmount += $amount;
                }
            }

            $html .= '
            <tr>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"><strong>TOTAL</strong></td>
                <td style="border: 1px solid black;" >' . $totalTransactions . '</td>
                <td style="border: 1px solid black;" ></td>
                <td style="border: 1px solid black;" >' . $this->formatPrice($totalAmount) . '</td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
            </tr>
            <tr><td colspan="8" style="padding: 30px;"></td></tr>';
        }

        $html .= '</table>';
        return $html;
    }

    private function formatPrice($price)
    {
        return is_numeric($price) ? number_format(round($price, 2), 2, '.', ',') : (string)$price;
    }

    public function getCssFile()
    {
        // Path to the directory containing the CSS file
        $cssDirectory = public_path('build/assets/');

        // Get all CSS files in the directory
        $cssFiles = glob($cssDirectory . 'app-*.css');

        // If a matching file is found, return its URL
        if (!empty($cssFiles)) {
            // Assuming there's only one matching file, return its URL
            return asset('build/assets/' . basename($cssFiles[0]));
        }

        // Fallback if no matching CSS file is found
        return false;
    }
}
