<?php

namespace App\Http\Controllers;

use App\Exports\PaymentDetailReportExport;
use App\Exports\TransactionsReportExport;
use App\Exports\SummaryReportExport;
use App\Services\GeneratesPaymentDetailReportHtml;
use App\Services\GeneratesSummaryReportHtml;
use App\Services\GeneratesTransactionsReportHtml;
use Exception;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Log;

class ReportsController extends Controller
{
    public function summaryReport(Request $request, $fromDate, $toDate)
    {
        return Excel::download(
            new SummaryReportExport($fromDate, $toDate),
            "Summary Report " . $fromDate . " to " . $toDate . ".xls"
        );
    }

    public function transactionsReport(Request $request, $fromDate, $toDate)
    {
        return Excel::download(
            new TransactionsReportExport($request, $fromDate, $toDate),
            "Transactions Report " . $fromDate . " to " . $toDate . ".xls"
        );
    }

    public function paymentDetailReport(Request $request, $fromDate, $toDate)
    {
        return Excel::download(
            new PaymentDetailReportExport($request, $fromDate, $toDate),
            "Payment Detail Report " . $fromDate . " to " . $toDate . ".xls"
        );
    }

    public function generateReportPreview(Request $request, $reportType)
    {
        // Map report types to their respective services
        $reportServices = [
            'summaryReport' => GeneratesSummaryReportHtml::class,
            'transactionReport' => GeneratesTransactionsReportHtml::class,
            'paymentDetailReportReport' => GeneratesPaymentDetailReportHtml::class,
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
        // Map report types to their respective services
        $reportServices = [
            'summaryReport' => GeneratesSummaryReportHtml::class,
            'transactionReport' => GeneratesTransactionsReportHtml::class,
            'paymentDetailReportReport' => GeneratesPaymentDetailReportHtml::class,
        ];

        // Validate report type
        if (!isset($reportServices[$reportType])) {
            throw new Exception("Report Type Not Found");
        }

        // Generate HTML using the appropriate service
        $html = (new $reportServices[$reportType]())->generate($request->input());

        // Generate and stream PDF
        $pdf = PDF::loadHTML($html);

        // Check if the PDF object is created correctly
        if ($pdf) {
            // Stream PDF to the browser
            return $pdf->stream('document.pdf');
        } else {
            throw new Exception("Error generating PDF");
        }
    }
}
