<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentReceiversTable extends Migration
{
    public function up()
    {
        Schema::create('payment_receivers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('bank_name');
            $table->string('bank_account_no');
            $table->string('swift_code');
            $table->foreignId('currency_id')
                ->constrained('currencies')  // Refers to the 'currencies' table
                ->default(1)  // Set a default to the currency with ID 1, change as necessary
                ->onDelete('cascade');  // Set action on delete (optional)
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_receivers');
    }
}
