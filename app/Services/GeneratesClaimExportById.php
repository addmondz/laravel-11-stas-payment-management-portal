<?php

namespace App\Services;

use App\Models\{Claim};
use Exception;
use Illuminate\Support\Facades\Log;

class GeneratesClaimExportById
{
    private $requestBody;
    private $pdfToMerge;

    public function generate($requestBody)
    {
        $this->requestBody = $requestBody;
        $html = $this->generateReport();

        // If we have a PDF to merge and this is for PDF generation
        if ($this->pdfToMerge && isset($requestBody['for_pdf']) && $requestBody['for_pdf']) {
            return [
                'html' => $html,
                'pdf_path' => $this->pdfToMerge
            ];
        }

        return $html;
    }

    private function generateReport()
    {
        if (!isset($this->requestBody['claim_id']) || empty($this->requestBody['claim_id'])) {
            throw new Exception("Claim ID is required.");
        }

        $claimId = $this->requestBody['claim_id'];
        $claim = Claim::find($claimId);

        if (!$claim) {
            throw new Exception("Claim not found.");
        }

        // Fetch necessary data (example placeholders, adjust as needed)
        $fetchedData = [
            'created_user' => ['name' => $claim->createdBy->name ?? '-'],
            'payment_to_user' => ['name' => $claim->paymentReceiver->name ?? '-'],
            'payment_type' => $claim->payment_type ?? '-',
            'payment_category' => ['name' => $claim->paymentCategory->name ?? '-'],
            'purpose' => $claim->purpose ?? '-',
            'created_at' => $claim->created_at->format('Y-m-d') ?? '-',
            'currency_object' => ['short_code' => $claim->currencyObject->short_code ?? '-'],
            'amount' => $claim->amount ?? 0,
            'gst_amount' => $claim->gst_amount ?? 0,
        ];

        // Check if this is for PDF generation
        $forPdf = isset($this->requestBody['for_pdf']) && $this->requestBody['for_pdf'];
        Log::info('Generating report for: ' . ($forPdf ? 'PDF' : 'HTML'));
        
        // Check if receipt is PDF
        $isPdf = $claim->receipt_file && strtolower(pathinfo($claim->receipt_file, PATHINFO_EXTENSION)) === 'pdf';
        
        // Handle receipt display
        if ($isPdf && $forPdf) {
            // Store PDF path for merging later
            $this->pdfToMerge = public_path($claim->receipt_file);
            $receiptDisplay = '<div class="section"><span class="value">PDF Receipt will be attached at the end</span></div>';
        } else {
            // Handle image display or no receipt
            $imgPath = $this->getReceiptFileUrl($claim->receipt_file, $forPdf);
            $receiptDisplay = $claim->receipt_file && !$isPdf && $imgPath ? 
                '<div class="receipt-image">
                    <img src="' . $imgPath . '" 
                        alt="Receipt" 
                        style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                </div>' : 
                '<div class="section"><span class="value">No receipt available</span></div>';
        }

        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Claim Export</title>
            <style>
                @page {
                    size: A4;
                    margin: 15mm 15mm;
                }
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.4;
                    color: #333;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    background: white;
                    font-size: 12px;
                }
                .container {
                    width: 100%;
                }
                .header {
                    background: #f8f9fa;
                    padding: 15px 20px;
                    border-radius: 6px;
                    margin-bottom: 15px;
                    border: 1px solid #dee2e6;
                }
                .header h1 {
                    font-size: 18px;
                    margin: 0;
                    color: #2c3e50;
                }
                .header p {
                    font-size: 11px;
                    margin: 3px 0 0;
                    color: #666;
                }
                .claim-info {
                    background: white;
                    border-radius: 6px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                    margin-bottom: 15px;
                    page-break-inside: avoid;
                    border: 1px solid #eee;
                }
                .claim-info h2 {
                    font-size: 14px;
                    color: #2c3e50;
                    margin: 0 0 12px 0;
                    padding: 15px;
                    border-bottom: 1px solid #f0f0f0;
                    background: #f8f9fa;
                    font-weight: bold;
                    background: #f8f9fa;
                }
                .section {
                    margin-bottom: 12px;
                    padding: 0 15px 12px 15px;
                    border-bottom: 1px solid #f0f0f0;
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    gap: 20px;
                    align-items: center;
                }
                .section:last-child {
                    margin-bottom: 0;
                    padding-bottom: 15px;
                    border-bottom: none;
                }
                .label {
                    font-weight: 600;
                    color: #6b7280;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                }
                .value {
                    color: #333;
                    font-size: 12px;
                    padding-left: 0;
                }
                .receipt-section {
                    page-break-before: always;
                }
                .receipt-image {
                    max-width: 100%;
                    height: auto;
                    margin: 15px 0;
                    text-align: center;
                }
                .receipt-image img {
                    max-width: 100%;
                    height: auto;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                .amount-value {
                    font-weight: 600;
                    color: #2c3e50;
                }
                .status-badge {
                    display: inline-block;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .details-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .details-table td {
                    padding: 12px 15px;
                    border-bottom: 1px solid #f0f0f0;
                    vertical-align: middle;
                }
                .details-table tr:last-child td {
                    border-bottom: none;
                }
                .details-table td:first-child {
                    width: 200px;
                    font-weight: 600;
                    color: #6b7280;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                }
                .details-table td:last-child {
                    color: #333;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Claim Details</h1>
                    <p>Generated On: ' . date('Y-m-d H:i:s') . '</p>
                    <p>Generated By: ' . \Illuminate\Support\Facades\Auth::user()->name . '</p>
                </div>
                
                <div class="claim-info">
                    <h2>Details</h2>
                    <table class="details-table">
                        <tr>
                            <td>Created By</td>
                            <td>' . ($fetchedData['created_user']['name'] ?? '-') . '</td>
                        </tr>
                        <tr>
                            <td>Payment To</td>
                            <td>' . ($fetchedData['payment_to_user']['name'] ?? '-') . '</td>
                        </tr>
                        <tr>
                            <td>Payment Type</td>
                            <td>' . ($fetchedData['payment_type'] ?? '-') . '</td>
                        </tr>
                        <tr>
                            <td>Payment Category</td>
                            <td>' . ($fetchedData['payment_category']['name'] ?? '-') . '</td>
                        </tr>
                        <tr>
                            <td>Purpose</td>
                            <td>' . ($fetchedData['purpose'] ?? '-') . '</td>
                        </tr>
                        <tr>
                            <td>Created At</td>
                            <td>' . ($fetchedData['created_at'] ?? '-') . '</td>
                        </tr>
                    </table>
                </div>

                <div class="claim-info">
                    <h2>Amount Details</h2>
                    <table class="details-table">
                        <tr>
                            <td>Total Amount</td>
                            <td>' . $fetchedData['currency_object']['short_code'] . ' ' . number_format($fetchedData['amount'], 2) . '</td>
                        </tr>
                        <tr>
                            <td>GST Amount</td>
                            <td>' . ($fetchedData['gst_amount'] == 0 ? '-' : $fetchedData['currency_object']['short_code'] . ' ' . number_format($fetchedData['gst_amount'], 2)) . '</td>
                        </tr>
                    </table>
                </div>

                <div class="receipt-section">
                    <div class="claim-info">
                        <h2>Receipt Document</h2>
                        ' . $receiptDisplay . '
                    </div>
                </div>
            </div>
        </body>
        </html>';

        return $html;
    }

    private function getReceiptFileUrl($url, $forPdf = false)
    {
        if (!$url) {
            Log::info('No URL provided');
            return null;
        }

        // If it's a PDF, don't process it
        if (strtolower(pathinfo($url, PATHINFO_EXTENSION)) === 'pdf') {
            return null;
        }
        
        if ($forPdf) {
            try {
                $filePath = public_path($url);
                Log::info('Attempting to read file from: ' . $filePath);
                
                if (!file_exists($filePath)) {
                    Log::error('File not found at: ' . $filePath);
                    return null;
                }

                $fileContent = file_get_contents($filePath);
                if ($fileContent === false) {
                    Log::error('Failed to read file content');
                    return null;
                }

                $base64 = base64_encode($fileContent);
                $extension = strtolower(pathinfo($url, PATHINFO_EXTENSION));
                $mimeType = $this->getMimeType($extension);
                
                return "data:{$mimeType};base64,{$base64}";

            } catch (\Exception $e) {
                Log::error('Error processing file for PDF: ' . $e->getMessage());
                return null;
            }
        } else {
            // For HTML display, use URL
            $baseUrl = config('app.url');
            $prefix = app()->environment('production') ? 'public/' : '';
            return $baseUrl . '/' . $prefix . $url;
        }
    }

    private function getMimeType($extension)
    {
        $mimeTypes = [
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'pdf' => 'application/pdf'
        ];

        return $mimeTypes[$extension] ?? 'application/octet-stream';
    }
}
