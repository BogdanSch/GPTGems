<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Prompt;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            "id" => 1,
            "name" => 'Bohdan',
            "email" => 'test@example.com',
            "password" => bcrypt("Bohdan"),
        ]);
        Prompt::factory(20)->create();
    }
}