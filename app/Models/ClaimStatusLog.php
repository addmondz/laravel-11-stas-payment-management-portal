<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimStatusLog extends Model
{
    use HasFactory;

    protected $fillable = ['claim_id', 'status', 'causer_id']; // Only these fields are mass-assignable

    // Relationship to Claim (assuming there is a Claim model)
    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }

    // Relationship to User (assuming there's a User model)
    public function causer()
    {
        return $this->belongsTo(User::class, 'causer_id');
    }
}
