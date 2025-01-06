<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use Illuminate\Support\Facades\Request;

class ApprovalStatusController extends Controller
{
    public function list(Request $request)
    {
        return ApprovalStatus::APPROVAL_CHOICE;
    }
}
