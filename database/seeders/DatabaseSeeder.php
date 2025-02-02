<?php

namespace Database\Seeders;

use App\Classes\ValueObjects\Constants\ApprovalRoles;
use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Classes\ValueObjects\Constants\GeneralConstant;
use App\Models\Claim;
use App\Models\Country;
use App\Models\Currency;
use App\Models\PaymentCategory;
use App\Models\PaymentReceiver;
use App\Models\User;
use App\Models\UserPrivilege;
use App\Models\Variable;
use Carbon\Carbon;
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

        // create Admin Account
        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // You can set the password as per your choice
            'role' => 'admin', // Assign the admin role
            'can_delete_claim' => true,
        ]);

        // create l1 approval
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

        // create l2 approval
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

        // create l3 approval
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

        // create finance approval
        User::create([
            'name' => 'Finance',
            'email' => 'finance@email.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // You can set the password as per your choice
            'role' => 'finance', // Assign the admin role
        ]);

        $categories = [
            'transportation',
            'mobile',
            'entertainment',
        ];
        foreach ($categories as $category) {
            PaymentCategory::create([
                'name' => $category,
            ]);
        }

        Variable::create([
            'name' => 'Gst Percentage',
            'value' => '6',
            'general_constant_id' => GeneralConstant::GST_CONFIGURATION,
        ]);

        //  <------------------------------------------optional seeder starts----------------------------------------------------> //

        // create random PaymentReceiver
        $numberOfUsers = 5;
        for ($i = 0; $i < $numberOfUsers; $i++) {
            PaymentReceiver::create([
                'name' => fake()->name(),
                'bank_name' => 'Bank of Laravel',
                'bank_account_no' => strval(rand(1000000000, 9999999999)),
                'swift_code' => 'SWIFT' . str_pad($i, 3, '0', STR_PAD_LEFT),
                'currency_id' => Currency::inRandomOrder()->first()->id,
            ]);
        }

        // create random claims.
        $numberOfClaims = 0;
        for ($i = 0; $i < $numberOfClaims; $i++) {
            Claim::create([
                'created_by' => User::first()->id,
                'payment_receiver_id' => PaymentReceiver::inRandomOrder()->first()->id,
                'payment_type' => $this->randomPick(['reimbursement', 'external_payments']),
                'payment_category_id' => PaymentCategory::inRandomOrder()->first()->id,
                'currency_id' => Currency::inRandomOrder()->first()->id,
                'amount' => rand(1000, 10000),
                'gst_amount' => rand(50, 500),
                'gst_percent' => rand(5, 15),
                'purpose' => fake()->sentence() . ' ' . fake()->sentence(),
                'receipt_date' => Carbon::today()->subDays(rand(1, 30)),
                'receipt_file' => null,
                'status' => ApprovalStatus::PENDING_APPROVAL,
                'approval_status' => 0,

                'created_at' => fake()->dateTimeThisYear,
            ]);
        }
        //  <------------------------------------------optional seeder end----------------------------------------------------> //
    }

    public function randomPick(array $items)
    {
        if (empty($items)) {
            return null;
        }
        return $items[array_rand($items)];
    }
}
