<?php

namespace App\Http\Controllers;

use App\Exports\PaymentDetailReportExport;
use App\Exports\TransactionsReportExport;
use App\Exports\SummaryReportExport;
use App\Services\GeneratesClaimExportById;
use App\Services\GeneratesPaymentDetailReportHtml;
use App\Services\GeneratesSummaryReportHtml;
use App\Services\GeneratesTransactionsReportHtml;
use Exception;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Barryvdh\DomPDF\Facade\Pdf;
use iio\libmergepdf\Merger;
use iio\libmergepdf\Driver\TcpdiDriver;
use App\Models\Claim;
use App\Models\PaymentGroup;
use App\Services\GeneratesPaymentGroupExportById;

class ReportsController extends Controller
{
    public function summaryReport(Request $request, $fromDate, $toDate)
    {
        return Excel::download(
            new SummaryReportExport($fromDate, $toDate),
            "Summary_Report_" . $fromDate . "_to_" . $toDate . ".xls"
        );
    }

    public function transactionsReport(Request $request, $fromDate, $toDate)
    {
        return Excel::download(
            new TransactionsReportExport($request, $fromDate, $toDate),
            "Transactions_Report_" . $fromDate . "_to_" . $toDate . ".xls"
        );
    }

    public function paymentDetailReport(Request $request, $fromDate, $toDate)
    {
        return Excel::download(
            new PaymentDetailReportExport($request, $fromDate, $toDate),
            "Payment_Detail_Report_" . $fromDate . "_to_" . $toDate . ".xls"
        );
    }

    public function generateReportPreview(Request $request, $reportType)
    {
        // Map report types to their respective services
        $reportServices = [
            'summaryReport' => GeneratesSummaryReportHtml::class,
            'transactionReport' => GeneratesTransactionsReportHtml::class,
            'paymentDetailReport' => GeneratesPaymentDetailReportHtml::class,
            'claimExport' => GeneratesClaimExportById::class,
        ];

        // Validate report type
        if (!isset($reportServices[$reportType])) {
            throw new Exception("Report Type Not Found");
        }

        // Generate HTML using the appropriate service
        $html = (new $reportServices[$reportType]())->generate($request->input());

        // Return the generated HTML as JSON
        return response()->json(['html' => $html]);
    }

    public function exportPDF(Request $request, $reportType)
    {
        try {
            // Map report types to their respective services
            $reportServices = [
                'summaryReport' => GeneratesSummaryReportHtml::class,
                'transactionReport' => GeneratesTransactionsReportHtml::class,
                'paymentDetailReport' => GeneratesPaymentDetailReportHtml::class,
                'claimExport' => GeneratesClaimExportById::class,
            ];

            // Validate report type
            if (!isset($reportServices[$reportType])) {
                throw new Exception("Report Type Not Found");
            }

            // Create merger instance
            $merger = new Merger(new TcpdiDriver());

            // Handle multiple claims
            if ($reportType === 'claimExport' && isset($request->claim_ids)) {
                $claimIds = explode(',', $request->claim_ids);
                foreach ($claimIds as $claimId) {
                    // Generate HTML for each claim
                    $result = (new $reportServices[$reportType]())->generate([
                        'claim_id' => $claimId,
                        'for_pdf' => true
                    ]);

                    // Add main content for this claim
                    $mainPdf = PDF::loadHTML($result['html']);
                    $merger->addRaw($mainPdf->output());

                    // Add receipt PDF if exists
                    if (isset($result['pdf_path']) && file_exists($result['pdf_path'])) {
                        $merger->addFile($result['pdf_path']);
                    }

                    // Add payment voucher HTML if exists
                    if (isset($result['paymentVoucherHtml'])) {
                        $voucherPdf = PDF::loadHTML($result['paymentVoucherHtml']);
                        $merger->addRaw($voucherPdf->output());
                    }

                    // Add payment voucher PDF if exists
                    if (isset($result['paymentVoucherPdf']) && file_exists($result['paymentVoucherPdf'])) {
                        $merger->addFile($result['paymentVoucherPdf']);
                    }
                }

                // Merge all PDFs
                $mergedPdf = $merger->merge();

                return response($mergedPdf)
                    ->header('Content-Type', 'application/pdf')
                    ->header('Content-Disposition', 'attachment; filename="claims.pdf"');
            }

            // Handle single claim (existing code)
            $result = (new $reportServices[$reportType]())->generate($request->input());

            if (is_array($result) && isset($result['html'])) {
                $mainPdf = PDF::loadHTML($result['html']);
                $merger->addRaw($mainPdf->output());

                if (isset($result['pdf_path']) && file_exists($result['pdf_path'])) {
                    $merger->addFile($result['pdf_path']);
                }

                if (isset($result['paymentVoucherHtml'])) {
                    $voucherPdf = PDF::loadHTML($result['paymentVoucherHtml']);
                    $merger->addRaw($voucherPdf->output());
                }

                if (isset($result['paymentVoucherPdf']) && file_exists($result['paymentVoucherPdf'])) {
                    $merger->addFile($result['paymentVoucherPdf']);
                }

                $mergedPdf = $merger->merge();

                return response($mergedPdf)
                    ->header('Content-Type', 'application/pdf')
                    ->header('Content-Disposition', 'attachment; filename="claim.pdf"');
            }

            $pdf = PDF::loadHTML($result);
            return $pdf->stream('document.pdf');
        } catch (\Exception $e) {
            Log::error('PDF Generation Error: ' . $e->getMessage());
            throw $e;
        }
    }

    public function exportPaymentGroupPDF(Request $request)
    {
        try {
            $paymentGroup = PaymentGroup::find($request->payment_group_id);
            if (!$paymentGroup) {
                throw new Exception("Payment group not found");
            }

            $claimIds = $paymentGroup->claims->pluck('id')->toArray();
            $lastClaimId = array_pop($claimIds); // Get and remove the last element
            $merger = new Merger(new TcpdiDriver());

            foreach ($paymentGroup->claims as $claim) {
                $result = (new GeneratesPaymentGroupExportById())->generate([
                    'claim_id' => $claim->id,
                    'for_pdf' => true
                ]);

                $this->addPdfToMerger($merger, $result['html'] ?? null);
                $this->addFileToMerger($merger, $result['pdf_path'] ?? null);

                if ($claim->id == $lastClaimId) {
                    $this->addPdfToMerger($merger, $result['paymentVoucherHtml'] ?? null);
                    $this->addFileToMerger($merger, $result['paymentVoucherPdf'] ?? null);
                }
            }

            return response($merger->merge(), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'attachment; filename="claims.pdf"',
            ]);
        } catch (\Exception $e) {
            Log::error('PDF Generation Error: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Adds HTML content as a PDF to the merger.
     */
    private function addPdfToMerger(Merger $merger, ?string $html)
    {
        if ($html) {
            $pdf = PDF::loadHTML($html);
            $merger->addRaw($pdf->output());
        }
    }

    /**
     * Adds a file to the merger if it exists.
     */
    private function addFileToMerger(Merger $merger, ?string $filePath)
    {
        if ($filePath && file_exists($filePath)) {
            $merger->addFile($filePath);
        }
    }
}
