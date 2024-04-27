<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PermissionGroup;
use App\Traits\AuthorizationFilter;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    use AuthorizationFilter;
    public function index()
    {
        $this->authorizeOrFail('role.index');

        $breadcrumb = [
            "title" => "Role Management",
            "items" => Breadcrumbs::generate('role.index')
        ];

        $roles = Role::whereNotIn('id', [1])->latest()->paginate(5)->withQueryString();

        foreach($roles as $role){
            $role->created_at_human = $role->created_at->diffForHumans();
        }

        return Inertia::render('Role/List', [
            'breadcrumb' => $breadcrumb,
            'roles' => $roles
        ]);
    }

    public function show(Role $role)
    {
        $this->authorizeOrFail('role.index');
        $breadcrumb = [
            "title" => "Role Detail",
            "items" => Breadcrumbs::generate('role.show', $role)
        ];
        return Inertia::render('Role/Show', [
            'breadcrumb' => $breadcrumb,
            'permissionGroup' => PermissionGroup::with('permissions')->get(),
            'roleHasPermission' => $role->permissions->pluck('name'),
            'role' => $role,
        ]);

    }

    public function create()
    {
        $this->authorizeOrFail('role.create');
        $breadcrumb = [
            "title" => "Create Role",
            "items" => Breadcrumbs::generate('role.create')
        ];
        return Inertia::render('Role/Create', [
            'breadcrumb' => $breadcrumb,
            'permissionGroup' => PermissionGroup::with('permissions')->get()
        ]);
    }

    public function store(Request $request)
    {
        $this->authorizeOrFail('role.create');
        $request->validate([
            'name' => ['required', Rule::unique(Role::class, 'name')],
            'selectedPermissions' => ['sometimes', 'array']
        ]);

        try {
            $role = Role::create(['name' => $request->name]);
            $role->syncPermissions($request->selectedPermissions);
            return redirect()->route('role.index')->with('success', 'role created');
        } catch (\Exception $e) {
            return redirect()->back()->with('danger', $e->getMessage());
        }
    }

    public function edit(Role $role)
    {
        $this->authorizeOrFail('role.edit');
        $breadcrumb = [
            "title" => "Edit Role",
            "items" => Breadcrumbs::generate('role.edit', $role)
        ];
        return Inertia::render('Role/Edit', [
            'breadcrumb' => $breadcrumb,
            'permissionGroup' => PermissionGroup::with('permissions')->get(),
            'roleHasPermission' => $role->permissions->pluck('name'),
            'role' => $role,
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $this->authorizeOrFail('role.edit');
        $request->validate([
            'name' => ['required', Rule::unique(Role::class, 'name')->ignore($role)],
            'selectedPermissions' => ['sometimes', 'array']
        ]);

        try {
            $role->update(['name' => $request->name]);
            $role->syncPermissions($request->selectedPermissions);
            return redirect()->back()->with('success', 'role updated');
        } catch (\Exception $e) {
            return redirect()->back()->with('danger', $e->getMessage());
        }
    }

    public function destroy(Role $role)
    {
        $this->authorizeOrFail('role.destroy');
        if ($role->name == "super_admin") {
            return redirect()->back()->with('danger', "something went wrong");
        }

        try {
            $role->delete();
            return redirect()->route('role.index')->with('success', 'role deleted');
        } catch (\Exception $e) {
            return redirect()->back()->with('danger', $e->getMessage());
        }
    }

}
