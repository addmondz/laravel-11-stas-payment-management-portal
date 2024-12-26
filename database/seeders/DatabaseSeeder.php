<?php

namespace Database\Seeders;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use App\Classes\ValueObjects\Constants\GeneralConstant;
use App\Models\BankAccount;
use App\Models\Country;
use App\Models\Currency;
use App\Models\PaymentCategory;
use App\Models\User;
use App\Models\UserPrivilege;
use App\Models\Variable;
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

        $l1user = User::create([
            'name' => 'L1',
            'email' => 'l1@email.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // You can set the password as per your choice
            'role' => 'user', // Assign the admin role
        ]);
        UserPrivilege::updateOrCreate(
            ['user_id' => $l1user->id],
            ['approval_role_id' => ApprovalRoles::L1_APPROVAL_MEMBERS]
        );

        $l2user = User::create([
            'name' => 'L2',
            'email' => 'l2@email.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // You can set the password as per your choice
            'role' => 'user', // Assign the admin role
        ]);
        UserPrivilege::updateOrCreate(
            ['user_id' => $l2user->id],
            ['approval_role_id' => ApprovalRoles::L2_APPROVAL_MEMBERS]
        );

        $l3user = User::create([
            'name' => 'L3',
            'email' => 'l3@email.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // You can set the password as per your choice
            'role' => 'user', // Assign the admin role
        ]);
        UserPrivilege::updateOrCreate(
            ['user_id' => $l3user->id],
            ['approval_role_id' => ApprovalRoles::L3_APPROVAL_MEMBERS]
        );

        BankAccount::create([
            'holder_name' => 'John Doe',
            'bank_name' => 'Bank of Laravel',
            'bank_account_number' => '1234567890',
            'swift_code' => 'BOFLUS33',
            'currency' => Currency::find(1)->id,
            'owner' => User::find(1)->id,
        ]);

        PaymentCategory::create([
            'name' => 'transportation',
        ]);

        Variable::create([
            'name' => 'Gst Percentage',
            'value' => '6',
            'general_constant_id' => GeneralConstant::GST_CONFIGURATION,
        ]);
    }
}
