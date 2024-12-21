<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Country
 * @package App\Models
 *
 * @property string name
 * @property string short_code
 * @property string phone_code
 */
class Country extends Model
{
    use SoftDeletes;

    protected $table = 'countries';

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'short_code', 'phone_code'];

    /**
     * @return HasMany
     */
    public function currencies(): HasMany
    {
        return $this->HasMany(Currency::class, 'country_id', 'id');
    }
}
