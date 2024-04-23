<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class LogoutController extends Controller
{
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        // Log the user out by invalidating the session.
        Auth::guard('web')->logout();

        // Invalidate the current session.
        $request->session()->invalidate();

        // Regenerate the CSRF token for the session.
        $request->session()->regenerateToken();

        // Redirect the user to the homepage after logout.
        return Redirect::to('/');
    }
}
