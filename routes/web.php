<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.auth.login');
});
Route::post('/login', [LoginController::class, 'login']);
Route::get('/pages/dashboard', [DashboardController::class, 'show']);
