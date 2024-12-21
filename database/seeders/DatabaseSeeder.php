<?php

namespace Database\Seeders;

use App\Models\BankAccount;
use App\Models\Country;
use App\Models\Currency;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CountrySeeder::class);

        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // You can set the password as per your choice
            'role' => 'admin', // Assign the admin role
        ]);

        BankAccount::create([
            'holder_name' => 'John Doe',
            'bank_name' => 'Bank of Laravel',
            'bank_account_number' => '1234567890',
            'swift_code' => 'BOFLUS33',
            'currency' => Currency::find(1)->id,
            'owner' => User::find(1)->id,
        ]);
    }
}
