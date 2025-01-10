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
        if ($reportType == 'summaryReport') {
            $requestBody = $request->input();
            $reportService = new GeneratesSummaryReportHtml();
            $html = $reportService->generate($requestBody);
            return response()->json(['html' => $html]);
        }

        if ($reportType == 'transactionReport') {
            $requestBody = $request->input();
            $reportService = new GeneratesTransactionsReportHtml();
            $html = $reportService->generate($requestBody);
            return response()->json(['html' => $html]);
        }

        if ($reportType == 'paymentDetailReportReport') {
            $requestBody = $request->input();
            $reportService = new GeneratesPaymentDetailReportHtml();
            $html = $reportService->generate($requestBody);
            return response()->json(['html' => $html]);
        }

        throw new Exception("Report Type Not Found");
    }
}
