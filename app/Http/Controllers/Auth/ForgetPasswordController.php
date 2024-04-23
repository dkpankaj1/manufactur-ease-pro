<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\Password;

class ForgetPasswordController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Forgot');
    }

    public function store(Request $request)
    {
        // validate 
        $request->validate([
            'email' => ['required', 'string', 'email', Rule::exists(User::class, 'email')]
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? back()->with(['success' => __($status)])
            : back()->withErrors(['email' => __($status)]);
    }
}
