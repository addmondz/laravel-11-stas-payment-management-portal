<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentGroup extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'payment_groups';

    protected $fillable = [
        'payment_voucher_number',
        'payment_date',
        'payment_voucher_receipt_file',
        'payment_mode',
    ];

    // Define relationship with the child table
    public function paymentGroupsChild()
    {
        return $this->hasMany(PaymentGroupChild::class);
    }

    public function claims()
    {
        return $this->hasManyThrough(
            Claim::class,
            PaymentGroupChild::class,
            'payment_group_id', // Foreign key on payment_groups_child table
            'id',               // Foreign key on claims table
            'id',               // Local key on payment_groups table
            'claim_id'          // Local key on payment_groups_child table
        );
    }
}
