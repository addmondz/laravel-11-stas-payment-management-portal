<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('payment_groups', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('payment_groups_child', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::table('payment_groups', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('payment_groups_child', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
