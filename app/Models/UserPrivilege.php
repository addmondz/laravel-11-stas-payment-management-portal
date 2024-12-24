<?php

namespace App\Models;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPrivilege extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'privilege_id'];

    public function getPrivilegeNameAttribute()
    {
        return ApprovalRoles::APPROVAL_ROLES_ID[$this->privilege_id] ?? '';
    }
}
