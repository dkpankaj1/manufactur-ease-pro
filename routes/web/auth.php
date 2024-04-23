<?php

use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' =>['guest']],function(){
    Route::get('/',[LoginController::class,'create'])->name('login');
    Route::post('/',[LoginController::class,'store']);

    Route::get('/forget-password', [ForgetPasswordController::class,'create'])->name('password.request');
    Route::post('/forget-password', [ForgetPasswordController::class,'store'])->name('password.email');

    Route::get('/reset-password/{token}', [ResetPasswordController::class,'create'])->name('password.reset');
    Route::post('/reset-password', [ResetPasswordController::class,'store'])->name('password.update');
});