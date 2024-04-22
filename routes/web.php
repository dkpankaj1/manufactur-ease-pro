<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['middleware' => ['guest']], function () {
    Route::get('/', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    Route::get('/forget-password', function () {
        return Inertia::render('Auth/Forget');
    })->name('forget.password');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Dashboard');
    })->name('dashboard');
});