<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentReceiver extends Model
{
    use HasFactory;

    // Specify the table name if it does not follow Laravel's plural naming convention
    protected $table = 'payment_receivers';

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'name',
        'bank_name',
        'bank_account_no',
        'swift_code',
        'currency_id',
    ];

    // Optionally define relationships. For example, if each PaymentReceiver belongs to a Currency
    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }
}
