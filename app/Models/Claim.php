<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Claim extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'created_by',
        'payment_to',
        'bank_account_id',
        'payment_type',
        'payment_category',
        'currency',
        'amount',
        'gst_amount',
        'gst_percent',
        'purpose',
        'receipt_date',
        'receipt_file',
        'status'
    ];

    public function currencyObject()
    {
        return $this->belongsTo(Currency::class, 'currency', 'id');
    }

    public function createdUser()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function paymentToUser()
    {
        return $this->belongsTo(User::class, 'payment_to', 'id');
    }
}
