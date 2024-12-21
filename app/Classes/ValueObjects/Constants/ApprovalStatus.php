<?php

namespace App\Classes\ValueObjects\Constants;

final class ApprovalStatus
{
    public const PENDING_SUBMISSION = 0;
    public const PENDING_APPROVAL = 1;
    public const APPROVED = 2;
    public const PAYMENT_COMPLETED = 3;
    public const REJECTED = 4;
    public const CANCELLED = 5;
    public const PAYMENT_FAILED = 6;

    public const APPROVAL_STATUS_ID = [
        self::PENDING_SUBMISSION     => "Pending Submission",
        self::PENDING_APPROVAL       => "Pending Approval",
        self::APPROVED               => "Approved",
        self::PAYMENT_COMPLETED      => "Payment Completed",
        self::REJECTED               => "Rejected",
        self::CANCELLED              => "Cancelled",
        self::PAYMENT_FAILED         => "Payment Failed",
    ];
}
