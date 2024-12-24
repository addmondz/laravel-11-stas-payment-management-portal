<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApprovalLog extends Model
{
    use HasFactory;

    // Define the table name (optional if it follows the default convention)
    protected $table = 'approval_logs';

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'claim_id',
        'user_id',
        'approval_level',
    ];

    // Define the relationships with Claim and User models
    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
