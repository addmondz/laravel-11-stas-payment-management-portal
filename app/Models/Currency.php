<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Relations\hasMany;

/**
 * Class Currency
 * @package App\Models
 *
 * @property \App\Models\Country country_id
 * @property string name
 * @property string short_code
 * @property string symbol
 */

class Currency extends Model
{
    use SoftDeletes;

    protected $table = 'currencies';

    protected $dates = ['deleted_at'];

    /**
     * @return BelongsTo
     */
    public function country(): BelongsTo
    {
        return $this->BelongsTo(Country::class, 'country_id', 'id');
    }
}
