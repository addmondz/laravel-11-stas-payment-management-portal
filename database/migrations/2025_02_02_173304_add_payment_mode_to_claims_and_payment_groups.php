<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('claims', function (Blueprint $table) {
            $table->string('payment_mode')->nullable()->after('payment_voucher_receipt_file'); // Replace 'some_column' with an existing column
        });

        Schema::table('payment_groups', function (Blueprint $table) {
            $table->string('payment_mode')->nullable()->after('payment_voucher_receipt_file'); // Replace 'some_column' with an existing column
        });
    }

    public function down()
    {
        Schema::table('claims', function (Blueprint $table) {
            $table->dropColumn('payment_mode');
        });

        Schema::table('payment_groups', function (Blueprint $table) {
            $table->dropColumn('payment_mode');
        });
    }
};
