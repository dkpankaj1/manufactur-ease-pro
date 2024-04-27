<?php

namespace App\Http\Controllers\User;

use App\Filters\ByName;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\AuthorizationFilter;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{
    use AuthorizationFilter;
    public function index()
    {
        $this->authorizeOrFail('user.index');

        $userQuery = User::query()->with('roles');

        $breadcrumb = [
            "title" => "Users",
            "items" => Breadcrumbs::generate('user.index')
        ];

        $users = Pipeline::send($userQuery)->through([
            ByName::class,
        ])->thenReturn()
            ->latest()
            ->paginate(10)
            ->withQueryString();

        foreach ($users as $user) {
            $user->created_at_human = $user->created_at->diffForHumans();
        }

        return Inertia::render('User/List', [
            'users' => $users,
            'breadcrumb' => $breadcrumb
        ]);
    }
    public function create()
    {
        $this->authorizeOrFail('user.create');

        $breadcrumb = [
            "title" => "Create User",
            "items" => Breadcrumbs::generate('user.create')
        ];

        return Inertia::render('User/Create', [
            'roles' => Role::get(),
            'breadcrumb' => $breadcrumb
        ]);
    }
    public function store(Request $request)
    {
        $this->authorizeOrFail('user.create');

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'phone' => ['required', 'string', 'max:255'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', Rule::exists(Role::class, 'name')]
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
            ]);

            $user->syncRoles($request->role);

            return redirect()->route('user.index')->with('success', 'user created');
        } catch (\Exception $e) {
            return back()->with('danger', $e->getMessage());
        }
    }
    public function edit(User $user)
    {
        $this->authorizeOrFail('user.edit');

        $breadcrumb = [
            "title" => "Edit User",
            "items" => Breadcrumbs::generate('user.edit', $user)
        ];

        $user->role = $user->roles->pluck('name')[0] ?? "";

        return Inertia::render('User/Edit', [
            'user' => $user,
            'roles' => Role::get(),
            'breadcrumb' => $breadcrumb
        ]);
    }
    public function update(Request $request, User $user)
    {
        $this->authorizeOrFail('user.edit');

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class, 'email')->ignore($user)],
            'phone' => ['required', 'string', 'max:255'],
            'role' => ['required', Rule::exists(Role::class, 'name')]
        ]);

        try {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone
            ]);

            $user->syncRoles($request->role);

            return redirect()->back()->with('success', 'user updated');
        } catch (\Exception $e) {
            return back()->with('danger', $e->getMessage());
        }
    }
    public function destroy(User $user)
    {
        $this->authorizeOrFail('user.destroy');
        try {
            $user->delete();
            return redirect()->back()->with('success', 'user deleted');
        } catch (\Exception $e) {
            return back()->with('danger', $e->getMessage());
        }
    }
}
