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
        return $this->formatDataAsHtml($this->getData());
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

    private function getData()
    {
        $startDate = date('Y-m-d 00:00:00', strtotime($this->requestBody['startDate']));
        $endDate = date('Y-m-d 23:59:59', strtotime($this->requestBody['endDate']));
        $currentDate = date('m/d/y');

        // Fetch claims grouped by payment_receiver_id
        $claims = Claim::whereBetween('created_at', [$startDate, $endDate]);
        $claims = $claims->get()->groupBy('payment_receiver_id');
        $receivers = PaymentReceiver::whereIn('id', $claims->keys())->pluck('name', 'id');
        $reportData = [];
        $notAvailable = '-';

        foreach ($claims as $receiverId => $categories) {
            $receiverName = $receivers[$receiverId] ?? $notAvailable;
            $reportData[] = ["Pay to:", $receiverName, "", "", "", "", "Report Date:", $currentDate];
            $reportData[] = ["Period:", "{$this->requestBody['startDate']} - {$this->requestBody['endDate']}", "", "", "", "", "", ""];

            // Table headers
            $reportData[] = ["No.", "Category", "Total Transaction", "Currency", "Total Amount", "Reviewed by", "Approved by", "Approved by"];

            $totalTransactions = $totalAmount = 0;
            $categoryCounter = 1;

            foreach ($categories->groupBy('payment_category_id') as $categoryId => $categoryClaims) {
                $transactionCount = $categoryClaims->count();
                $amount = $categoryClaims->sum('amount');
                $currency = $categoryClaims->first()->currencyObject->short_code ?? $notAvailable;
                $categoryName = ucwords(PaymentCategory::find($categoryId)->name);

                $approvalLogs = ClaimStatusLog::whereIn('claim_id', $categoryClaims->pluck('id'))->get();
                $l1Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L1_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();
                $l2Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L2_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();
                $l3Approvers = User::whereIn('id', $approvalLogs->where('status', ApprovalStatus::L3_APPROVAL)->pluck('causer_id'))->pluck('name')->toArray();

                $reportData[] = [
                    $categoryCounter++,
                    $categoryName,
                    $transactionCount,
                    $currency,
                    $this->formatPrice($amount),
                    implode(', ', $l1Approvers),
                    implode(', ', $l2Approvers),
                    implode(', ', $l3Approvers)
                ];

                $totalTransactions += $transactionCount;
                $totalAmount += $amount;
            }

            // Total row
            $reportData[] = ["", "TOTAL", $totalTransactions, "", $this->formatPrice($totalAmount), "", "", ""];
            $reportData[] = ['']; // Blank row for spacing
        }

        return $reportData;
    }

    private function formatDataAsHtml($data)
    {

        $cssFile = $this->getCssFile();
        if (!$cssFile) {
            Log::info("failed");
            $html = '<style>@import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css");</style>';
        } else {
            Log::info("found: " . $cssFile);
            $html = '<style>@import url("' . $cssFile . '");</style>';
        }

        // Image path
        $imagePath = public_path('images/logo-new.jpg');

        // Encode the image to base64
        $base64Image = base64_encode(file_get_contents($imagePath));

        // Build the HTML structure
        $html .= '
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <img src="data:image/jpeg;base64,' . $base64Image . '" alt="Logo" style="width: 300px; height: auto; margin-right: 20px;">
            <h1 style="font-size: 1.5rem; font-weight: bold; margin: 0;">Summary Report</h1>
        </div>
        <br><br>';

        // Create the table structure
        $html .= '<table border-collapse: collapse;" cellpadding="5" cellspacing="0" width="100%">';

        $noBorderCounter = $noBorderCounterDefault = 2; // update here no border header

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
