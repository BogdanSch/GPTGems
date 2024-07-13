<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        define("DEFAULT_PROFILE_PHOTO", "dist/images/profile/default-profile.png");

        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_photo_path')->default(DEFAULT_PROFILE_PHOTO)->after('password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("profile_photo_path");
        });
    }
};
