<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;
use App\Models\Currency;

class CountrySeeder extends Seeder
{
    public function run()
    {
        // Create Malaysia
        $malaysia = Country::create([
            'name' => 'Malaysia',
            'short_code' => 'MY',
            'phone_code' => '+60',
        ]);

        // Create Singapore
        $singapore = Country::create([
            'name' => 'Singapore',
            'short_code' => 'SG',
            'phone_code' => '+65',
        ]);

        // Create currency for Malaysia
        $malaysianRinggit = Currency::create([
            'name' => 'Malaysian Ringgit',
            'short_code' => 'MYR',
            'symbol' => 'RM',
            'country_id' => $malaysia->id,
        ]);

        // Create currency for Singapore
        $singaporeDollar = Currency::create([
            'name' => 'Singapore Dollar',
            'short_code' => 'SGD',
            'symbol' => 'S$',
            'country_id' => $singapore->id,
        ]);
    }
}
