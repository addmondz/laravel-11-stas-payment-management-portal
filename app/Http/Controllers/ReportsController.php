<?php

namespace App\Http\Controllers;

use App\Exports\TransactionsReportExport;
use App\Exports\SummaryReportExport;
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
            new TransactionsReportExport($fromDate, $toDate),
            "Transactions Report " . $fromDate . " to " . $toDate . ".xls"
        );
    }
}
