<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function listApprovalRoles()
    {
        $daats = ApprovalRoles::APPROVAL_ROLES_ID;

        return response()->json($daats);
    }
}
