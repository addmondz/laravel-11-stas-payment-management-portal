<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsAndInvoicesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Create groups table
        Schema::create('payment_groups', function (Blueprint $table) {
            $table->id();
            $table->string('payment_voucher_number')->nullable();
            $table->date('payment_date')->nullable();
            $table->string('payment_voucher_receipt_file')->nullable();
            $table->timestamps();
        });

        // Create invoices table
        Schema::create('payment_groups_child', function (Blueprint $table) {
            $table->id();
            $table->foreignId('payment_group_id')->constrained('payment_groups')->onDelete('cascade'); // Linking to the groups table
            $table->integer('claim_id')->unique()->nullable(); // A claim can only belong to one group, nullable in case not assigned
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop the invoices and groups tables in reverse order to maintain foreign key constraints
        Schema::dropIfExists('payment_groups_child');
        Schema::dropIfExists('payment_groups');
    }
}
