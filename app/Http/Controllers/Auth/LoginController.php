<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class LoginController extends Controller
{
    /**
     * Show the login form.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        // Render the login form using Inertia.
        return Inertia::render('Auth/Login');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        // Attempt to authenticate the user.
        $request->authenticate();

        // Regenerate the session ID to prevent session fixation attacks.
        $request->session()->regenerate();

        // Redirect the user to their intended location after successful login.
        return Redirect::intended('/dashboard');
    }
}
