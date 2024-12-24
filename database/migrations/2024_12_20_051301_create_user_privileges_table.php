<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPrivilegesTable extends Migration
{
    public function up()
    {
        Schema::create('user_privileges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->integer('privilege_id')->default(null);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_privileges');
    }
}
