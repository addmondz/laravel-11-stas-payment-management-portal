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

            // Generate HTML using the appropriate service
            $result = (new $reportServices[$reportType]())->generate($request->input());

            // If result is array (contains PDF path for merging)
            if (is_array($result) && isset($result['html']) && isset($result['pdf_path'])) {
                // Generate the main PDF from HTML
                $mainPdf = PDF::loadHTML($result['html']);
                $mainPdfContent = $mainPdf->output();

                // Create merger instance
                $merger = new Merger(new TcpdiDriver());

                // Add main PDF content
                $merger->addRaw($mainPdfContent);

                // Add receipt PDF if it exists
                if (file_exists($result['pdf_path'])) {
                    $merger->addFile($result['pdf_path']);
                }

                // Merge PDFs
                $mergedPdf = $merger->merge();

                return response($mergedPdf)
                    ->header('Content-Type', 'application/pdf')
                    ->header('Content-Disposition', 'attachment; filename="claim.pdf"');
            }

            // For non-merged PDFs
            $pdf = PDF::loadHTML(is_array($result) ? $result['html'] : $result);

            if (!$pdf) {
                throw new Exception("Error generating PDF");
            }

            return $pdf->stream('document.pdf');
        } catch (\Exception $e) {
            Log::error('PDF Generation Error: ' . $e->getMessage());
            throw $e;
        }
    }
}
