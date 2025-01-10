<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;
use App\Models\Currency;

class CountrySeeder extends Seeder
{
    public function run()
    {
        // Create Singapore
        $singapore = Country::create([
            'name' => 'Singapore',
            'short_code' => 'SG',
            'phone_code' => '+65',
        ]);
        // Create currency for Singapore
        $singaporeDollar = Currency::create([
            'name' => 'Singapore Dollar',
            'short_code' => 'SGD',
            'symbol' => 'S$',
            'country_id' => $singapore->id,
        ]);

        // Create Malaysia
        // $malaysia = Country::create([
        //     'name' => 'Malaysia',
        //     'short_code' => 'MY',
        //     'phone_code' => '+60',
        // ]);
        // // Create currency for Malaysia
        // $malaysianRinggit = Currency::create([
        //     'name' => 'Malaysian Ringgit',
        //     'short_code' => 'MYR',
        //     'symbol' => 'RM',
        //     'country_id' => $malaysia->id,
        // ]);

        // // Create United States
        // $us = Country::create([
        //     'name' => 'United States',
        //     'short_code' => 'US',
        //     'phone_code' => '+1',
        // ]);
        // // Create currency for United States
        // $usDollar = Currency::create([
        //     'name' => 'United States Dollar',
        //     'short_code' => 'USD',
        //     'symbol' => '$',
        //     'country_id' => $us->id,
        // ]);

        // // Create United Kingdom
        // $uk = Country::create([
        //     'name' => 'United Kingdom',
        //     'short_code' => 'GB',
        //     'phone_code' => '+44',
        // ]);
        // // Create currency for United Kingdom
        // $poundSterling = Currency::create([
        //     'name' => 'Pound Sterling',
        //     'short_code' => 'GBP',
        //     'symbol' => '£',
        //     'country_id' => $uk->id,
        // ]);

        // // Create Australia
        // $australia = Country::create([
        //     'name' => 'Australia',
        //     'short_code' => 'AU',
        //     'phone_code' => '+61',
        // ]);
        // // Create currency for Australia
        // $australianDollar = Currency::create([
        //     'name' => 'Australian Dollar',
        //     'short_code' => 'AUD',
        //     'symbol' => 'A$',
        //     'country_id' => $australia->id,
        // ]);
    }
}
