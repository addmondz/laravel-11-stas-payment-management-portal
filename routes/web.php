<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Welcome');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/claims', function () {
    return Inertia::render('Claim');
})->middleware(['auth', 'verified'])->name('claims');

Route::get('/claim/{id}', function ($id) {
    return Inertia::render('ClaimDetails', ['id' => $id]);
})->middleware(['auth', 'verified'])->name('claim.details');

Route::get('/users', function () {
    return Inertia::render('User');
})->middleware(['auth', 'verified'])->name('users');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// settings routes
Route::get('/settings/payment-category', function () {
    return Inertia::render('Settings/PaymentCategory');
})->middleware(['auth', 'verified'])->name('settings.paymentCategory');
// end settings routes

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
