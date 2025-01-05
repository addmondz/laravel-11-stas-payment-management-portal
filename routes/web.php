<?php

use App\Http\Controllers\ProfileController;
use App\Models\Variable;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function () {
    return Inertia::render('Claim');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/claim/{id}', function ($id) {
    return Inertia::render('ClaimDetails', ['id' => $id]);
})->middleware(['auth', 'verified'])->name('claim.details');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// not using
// Route::get('/settings/payment-category', function () {
//     return Inertia::render('PaymentCategoryPage');
// })->middleware(['auth', 'verified'])->name('settings.paymentCategory');

// Route::get('/users', function () {
//     return Inertia::render('User');
// })->middleware(['auth', 'verified'])->name('users');
// not using

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->middleware(['auth', 'verified'])->name('settings');

Route::get('/reports', function () {
    return Inertia::render('Reports');
})->middleware(['auth', 'verified'])->name('reports');

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
