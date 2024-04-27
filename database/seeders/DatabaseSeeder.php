<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(PermissionSeeder::class);
        $this->call(RoleSeeder::class);

        $superUser = User::factory()->create([
            'name' => 'super User',
            'email' => 'super@email.com',
            'password' => Hash::make('password')
        ]);
        $superUser->assignRole('super_admin');

        $adminUser = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'password' => Hash::make('password')
        ]);
        $adminUser->assignRole('admin');
    }
}
