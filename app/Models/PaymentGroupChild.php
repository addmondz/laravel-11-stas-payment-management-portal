<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentGroupChild extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'payment_groups_child';

    protected $fillable = [
        'payment_group_id',
        'claim_id',
    ];

    // Define the inverse relationship with the PaymentGroup model
    public function paymentGroup()
    {
        return $this->belongsTo(PaymentGroup::class);
    }

    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }
}
