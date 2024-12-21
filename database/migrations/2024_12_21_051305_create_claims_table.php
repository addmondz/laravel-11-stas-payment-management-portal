<?php

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClaimsTable extends Migration
{
    public function up()
    {
        Schema::create('claims', function (Blueprint $table) {
            $table->id();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->foreignId('payment_to')->constrained('users')->onDelete('cascade');
            $table->foreignId('bank_account_id')->constrained('bank_accounts')->onDelete('cascade');
            $table->string('payment_type'); // Reimbursement or External Payments
            $table->string('payment_category');
            $table->foreignId('currency')->constrained('currencies')->onDelete('cascade');
            $table->decimal('amount', 10, 2);
            $table->decimal('gst_amount', 10, 2);
            $table->decimal('gst_percent', 5, 2);
            $table->text('purpose');
            $table->date('receipt_date');
            $table->string('receipt_file')->nullable();
            $table->integer('status')->default(ApprovalStatus::PENDING_SUBMISSION);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('claims');
    }
}
