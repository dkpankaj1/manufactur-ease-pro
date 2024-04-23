<?php

namespace App\Http\Controllers;

use Diglactic\Breadcrumbs\Breadcrumbs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $breadcrumb = [
            "title" => "Dashboard",
            "items" => Breadcrumbs::generate('dashboard')
        ];
        return Inertia::render('Dashboard/Dashboard', [
            "breadcrumb" => $breadcrumb
        ]);
    }
}
