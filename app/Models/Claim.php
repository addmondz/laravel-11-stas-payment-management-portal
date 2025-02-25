<?php

namespace App\Models;

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use PhpParser\Node\Expr\FuncCall;

class Claim extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'created_by',
        'payment_receiver_id',
        'payment_to',
        'payment_type',
        'payment_category_id',
        'currency_id',
        'amount',
        'gst_amount',
        'gst_percent',
        'purpose',
        'receipt_date',
        'receipt_file',
        'status',
        'approval_status',

        'payment_voucher_number',
        'payment_date',
        'payment_voucher_receipt_file',
        'payment_mode',
        
        'created_at',
    ];

    public function currencyObject()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }

    public function createdUser()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function paymentToUser()
    {
        // return $this->belongsTo(User::class, 'payment_to', 'id');
        return $this->belongsTo(PaymentReceiver::class, 'payment_receiver_id', 'id');
    }

    public function paymentCategory()
    {
        return $this->belongsTo(PaymentCategory::class, 'payment_category_id', 'id');
    }

    public function statusLogs()
    {
        return $this->hasMany(ClaimStatusLog::class);
    }
}
