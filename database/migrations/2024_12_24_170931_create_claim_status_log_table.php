<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClaimStatusLogTable extends Migration
{
    public function up()
    {
        Schema::create('claim_status_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('claim_id');
            $table->string('status');
            $table->unsignedBigInteger('causer_id');
            $table->timestamps();

            $table->foreign('claim_id')->references('id')->on('claims')->onDelete('cascade');
            $table->foreign('causer_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('claim_status_logs');
    }
}
