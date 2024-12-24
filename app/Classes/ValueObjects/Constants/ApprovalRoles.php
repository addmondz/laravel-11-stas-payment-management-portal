<?php

namespace App\Classes\ValueObjects\Constants;

final class ApprovalRoles
{
    public const L1_APPROVAL_MEMBERS         = 1;
    public const L2_APPROVAL_MEMBERS         = 2;
    public const L3_APPROVAL_MEMBERS         = 3;

    public const APPROVAL_ROLES_ID = [
        self::L1_APPROVAL_MEMBERS          => "L1 Approval Members",
        self::L2_APPROVAL_MEMBERS          => "L2 Approval Members",
        self::L3_APPROVAL_MEMBERS          => "L3 Approval Members",
    ];
}
