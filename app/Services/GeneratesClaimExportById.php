<?php

namespace App\Services;

use App\Models\{Claim};
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class GeneratesClaimExportById
{
    private $requestBody;
    private $pdfToMerge;
    private $paymentVoucherHtml;
    private $paymentVoucherPdf;
    private const MIME_TYPES = [
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif' => 'image/gif',
        'pdf' => 'application/pdf'
    ];

    private function getFileExtension($url)
    {
        return strtolower(pathinfo($url, PATHINFO_EXTENSION));
    }

    public function generate($requestBody)
    {
        $this->requestBody = $requestBody;
        $html = $this->generateReport();

        return [
            'html' => $html,
            'pdf_path' => $this->pdfToMerge,
            'paymentVoucherHtml' => $this->paymentVoucherHtml ?? null,
            'paymentVoucherPdf' => $this->paymentVoucherPdf ?? null
        ];
    }

    private function generateReport()
    {
        $claim = $this->getClaimData();
        $fetchedData = $this->prepareClaimData($claim);
        $forPdf = isset($this->requestBody['for_pdf']) && $this->requestBody['for_pdf'];

        return $this->buildHtmlTemplate($claim, $fetchedData, $forPdf);
    }

    private function getClaimData()
    {
        if (!isset($this->requestBody['claim_id']) || empty($this->requestBody['claim_id'])) {
            throw new Exception("Claim ID is required.");
        }

        $claim = Claim::find($this->requestBody['claim_id']);
        if (!$claim) {
            throw new Exception("Claim not found.");
        }

        return $claim;
    }

    private function prepareClaimData($claim)
    {
        return [
            'created_user' => ['name' => $claim->createdUser->name ?? '-'],
            'payment_to_user' => ['name' => $claim->paymentToUser->name ?? '-'],
            'payment_type' => $this->formatString($claim->payment_type) ?? '-',
            'payment_category' => ['name' => $this->formatString($claim->paymentCategory->name) ?? '-'],
            'purpose' => $claim->purpose ?? '-',
            'created_at' => $claim->created_at->format('Y-m-d') ?? '-',
            'currency_object' => ['short_code' => $claim->currencyObject->short_code ?? '-'],
            'amount' => $claim->amount ?? 0,
            'gst_amount' => $claim->gst_amount ?? 0,
        ];
    }

    private function buildHtmlTemplate($claim, $fetchedData, $forPdf)
    {
        $receiptDisplay = $this->processFileDisplay($claim->receipt_file, $forPdf, 'Receipt');
        $paymentVoucherDisplay = $this->processFileDisplay($claim->payment_voucher_receipt_file, $forPdf, 'Payment Voucher', true);

        $styles = $this->getStyles();
        $bankDetails = $this->getBankDetailsHtml($claim);
        $detailsTable = $this->getDetailsTableHtml($fetchedData);
        $amountDetails = $this->getAmountDetailsHtml($fetchedData);

        return $this->assembleHtml(
            $claim,
            $styles,
            $detailsTable,
            $amountDetails,
            $bankDetails,
            $receiptDisplay,
            $paymentVoucherDisplay
        );
    }

    private function processFileDisplay($file, $forPdf, $type, $isVoucher = false)
    {
        if (!$file) {
            return $this->getNoFileMessage($type);
        }

        $isPdf = $this->isFileAPdf($file);
        if ($isPdf && $forPdf) {
            if ($isVoucher) {
                $this->paymentVoucherPdf = public_path($file);
                Log::info('$this->paymentVoucherPdf- ' . $this->paymentVoucherPdf);
            } else {
                $this->pdfToMerge = public_path($file);
                Log::info('$this->pdfToMerge- ' . $this->pdfToMerge);
            }

            return "<div class='section'><span class='value'>PDF {$type} will be attached at the end</span></div>";
        }

        $imgPath = $this->getReceiptFileUrl($file, $forPdf);
        return $imgPath && !$isPdf ? $this->getImageHtml($imgPath) : $this->getNoFileMessage($type);
    }

    private function isFileAPdf($file)
    {
        return strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'pdf';
    }

    private function getNoFileMessage($type)
    {
        return "<div class='section'><span class='value'>No {$type} available</span></div>";
    }

    private function getImageHtml($imgPath)
    {
        return "<div class='receipt-image'>
                    <img src='{$imgPath}' 
                         alt='Receipt' 
                         style='max-width: 100%; height: auto; display: block; margin: 0 auto;'>
                </div>";
    }

    private function getReceiptFileUrl($url, $forPdf = false)
    {
        if (!$url || $this->isFileAPdf($url)) {
            return null;
        }

        if ($forPdf) {
            return $this->getBase64FileContent($url);
        }

        $baseUrl = config('app.url');
        $prefix = app()->environment('production') ? 'public/' : '';
        return $baseUrl . '/' . $prefix . $url;
    }

    private function getBase64FileContent($url)
    {
        try {
            $filePath = public_path($url);
            if (!file_exists($filePath)) {
                Log::error('File not found at: ' . $filePath);
                return null;
            }

            $fileContent = file_get_contents($filePath);
            if ($fileContent === false) {
                Log::error('Failed to read file content');
                return null;
            }

            $extension = strtolower(pathinfo($url, PATHINFO_EXTENSION));
            $mimeType = self::MIME_TYPES[$extension] ?? 'application/octet-stream';
            return "data:{$mimeType};base64," . base64_encode($fileContent);
        } catch (\Exception $e) {
            Log::error('Error processing file for PDF: ' . $e->getMessage());
            return null;
        }
    }

    private function getStyles()
    {
        return '
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
                    font-size: 11px;
                    text-transform: uppercase;
                }
                .value {
                    color: #333;
                    font-size: 12px;
                    padding-left: 0;
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
                    color: #6b7280;
                    font-size: 11px;
                    text-transform: uppercase;
                }
                .details-table td:last-child {
                    color: #333;
                    font-size: 12px;
                }
            </style>';
    }

    private function getBankDetailsHtml($claim)
    {
        return '
            <div class="claim-info">
                <h2>Bank Details</h2>
                <table class="details-table">
                    <tr>
                        <td>Bank Name</td>
                        <td>' . $claim->paymentToUser->bank_name . '</td>
                    </tr>
                    <tr>
                    <td>Bank Number</td>
                        <td>' . $claim->paymentToUser->bank_account_no . '</td>
                    </tr>
                    <tr>
                        <td>Swift Code</td>
                        <td>' . $claim->paymentToUser->swift_code . '</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>' . $claim->paymentToUser->currency->country->name . ' (' . $claim->paymentToUser->currency->country->short_code . ')</td>
                    </tr>
                </table>
            </div>';
    }

    private function getDetailsTableHtml($fetchedData)
    {
        return '
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
            </div>';
    }

    private function getAmountDetailsHtml($fetchedData)
    {
        return '
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
            </div>';
    }

    private function assembleHtml($claim, $styles, $detailsTable, $amountDetails, $bankDetails, $receiptDisplay, $paymentVoucherDisplay)
    {
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Claim Export</title>
            ' . $styles . '
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Claim Details ID: ' . $this->formatId($claim->id) . '</h1>
                    <p>Generated On: ' . date('Y-m-d H:i:s') . '</p>
                    <p>Generated By: ' . Auth::user()->name . '</p>
                </div>
                
                ' . $detailsTable . '
                ' . $amountDetails . '
                ' . $bankDetails;

        $paymentReceiptType = $this->getFileExtension($claim->receipt_file);
        if ($paymentReceiptType != 'pdf') $html .= '<div class="receipt-section">
                <div class="claim-info">
                    <h2>Receipt Document</h2>
                    ' . $receiptDisplay . '
                </div>
            </div>';

        $paymentVoucherExtension = $this->getFileExtension($claim->payment_voucher_receipt_file);
        if ($paymentVoucherExtension != 'pdf') {
            $this->paymentVoucherHtml = '<style>.' . $this->getStyles() . '.</style>
                <div class="receipt-section">
                    <div class="claim-info">
                        <h2>Payment Voucher Document</h2>
                        ' . $paymentVoucherDisplay . '
                    </div>
                </div>';
        }

        $html .= '</div>
        </body>
        </html>';

        return $html;
    }

    function formatString($str)
    {
        return implode(' ', array_map(function ($word) {
            return ucfirst(strtolower($word));
        }, explode('_', $str)));
    }

    function formatId($id) {
        return str_pad($id, 5, '0', STR_PAD_LEFT);
    }
    
}
