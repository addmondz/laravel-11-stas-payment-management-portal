<?php

namespace App\Classes\ValueObjects\Constants;

final class ApprovalStatus
{
    public const PENDING_SUBMISSION       = 0;
    public const PENDING_APPROVAL         = 1;
    public const APPROVED                 = 2;
    public const PAYMENT_COMPLETED        = 3;
    public const REJECTED                 = 4;
    public const CANCELLED                = 5;
    public const PAYMENT_FAILED           = 6;

    // start 3 layer approval status
    public const L1_APPROVAL           = 7;
    public const L2_APPROVAL           = 8;
    public const L3_APPROVAL           = 9;
    // emd 3 layer approval status

    public const APPROVAL_STATUS_ID = [
        self::PENDING_SUBMISSION          => "Pending Submission",
        self::PENDING_APPROVAL            => "Pending Approval",
        self::APPROVED                    => "Approved",
        self::PAYMENT_COMPLETED           => "Payment Completed",
        self::REJECTED                    => "Rejected",
        self::CANCELLED                   => "Cancelled",
        self::PAYMENT_FAILED              => "Payment Failed",
        
        self::L1_APPROVAL                 => "L1 Approved",
        self::L2_APPROVAL                 => "L2 Approved",
        self::L3_APPROVAL                 => "L3 Approved",
    ];

    public const APPROVAL_STATUS_ID_FOR_LOG_DISPLAY = [
        self::PENDING_SUBMISSION          => "Pending Submission",
        self::PENDING_APPROVAL            => "Preparer",
        self::APPROVED                    => "Approved",
        self::PAYMENT_COMPLETED           => "Payment Completed",
        self::REJECTED                    => "Rejected",
        self::CANCELLED                   => "Cancelled",
        self::PAYMENT_FAILED              => "Payment Failed",
        
        self::L1_APPROVAL                 => "L1 Approved",
        self::L2_APPROVAL                 => "L2 Approved",
        self::L3_APPROVAL                 => "L3 Approved",
    ];

    public const APPROVAL_CHOICE = [
        // self::PENDING_SUBMISSION          => "Pending Submission",
        self::PENDING_APPROVAL            => "Pending Approval",
        self::APPROVED                    => "Approved",
        self::PAYMENT_COMPLETED           => "Payment Completed",
        // self::REJECTED                    => "Rejected",
        // self::CANCELLED                   => "Cancelled",
        // self::PAYMENT_FAILED              => "Payment Failed",
    ];
}
