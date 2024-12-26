<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVariablesTable extends Migration
{
    public function up()
    {
        Schema::create('variables', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('value');
            $table->integer('general_constant_id')->default(null)->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('variables');
    }
}
