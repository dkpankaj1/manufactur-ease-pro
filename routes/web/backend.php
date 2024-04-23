<?php


use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Profile\PasswordController;
use App\Http\Controllers\Profile\ProfileController;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' =>['auth']],function(){

    Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');

    Route::get('/profile',[ProfileController::class,"edit"])->name('profile.edit');
    Route::patch('/profile',[ProfileController::class,"update"])->name('profile.update');
    Route::get('/change-password', [PasswordController::class, 'edit'])->name('password.edit');
    Route::put('/change-password', [PasswordController::class, 'update'])->name('password.change');

    Route::post('/logout',[LogoutController::class,'destroy'])->name('logout');
});