<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\ProfileUpdateRequest;
use App\Traits\AuthorizationFilter;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function edit(Request $request)
    {
        
        $breadcrumb = [
            "title" => "Profile",
            "items" => Breadcrumbs::generate('profile')
        ];

        return Inertia::render('Profile/Profile',[
            'user' => $request->user(),
            'breadcrumb' => $breadcrumb
        ]);
    }
    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return redirect()->route('profile.edit')->with('success', 'profile updated');
    }
}
