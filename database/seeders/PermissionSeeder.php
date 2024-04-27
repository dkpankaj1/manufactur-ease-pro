<?php

namespace Database\Seeders;

use App\Models\PermissionGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roleManagement = PermissionGroup::create(['name' => "Role Management"]);
        Permission::create(['name' => 'role.index', 'permission_group_id' => $roleManagement->id]);
        Permission::create(['name' => 'role.create', 'permission_group_id' => $roleManagement->id]);
        Permission::create(['name' => 'role.edit', 'permission_group_id' => $roleManagement->id]);
        Permission::create(['name' => 'role.destroy', 'permission_group_id' => $roleManagement->id]);

        $roleManagement = PermissionGroup::create(['name' => "User Management"]);
        Permission::create(['name' => 'user.index', 'permission_group_id' => $roleManagement->id]);
        Permission::create(['name' => 'user.create', 'permission_group_id' => $roleManagement->id]);
        Permission::create(['name' => 'user.edit', 'permission_group_id' => $roleManagement->id]);
        Permission::create(['name' => 'user.destroy', 'permission_group_id' => $roleManagement->id]);

    }
}
