<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
class PasswordController extends Controller
{
    public function edit()
    {
        $breadcrumb = [
            "title" => "Change Password",
            "items" => Breadcrumbs::generate('profile')
        ];

        return Inertia::render('Profile/ChangePassword',['breadcrumb' => $breadcrumb]);

    }
    public function update(Request $request)
    {
        $validated = $request->validateWithBag('updatePassword', [
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->with('success', 'password updated');
    }
}
