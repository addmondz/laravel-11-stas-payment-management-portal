<?php

use App\Http\Controllers\ClaimController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\PaymentCategoryController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->middleware('auth')->group(function () {
    // Route::prefix('product')->group(function () {
    //     Route::get('/', [ProductController::class, 'index'])->name('product.list');
    //     Route::post('/add-to-cart', [ProductController::class, 'addToCart'])->name('product.addToCart');
    // });

    Route::prefix('claims')->group(function () {
        Route::get('/list', [ClaimController::class, 'list'])->name('claims.list');
        Route::post('/store', [ClaimController::class, 'store'])->name('claims.store');
        Route::get('/{id}/fetch', [ClaimController::class, 'fetchData'])->name('claims.fetchData');
        Route::post('/{id}/approve', [ClaimController::class, 'approveClaim'])->name('claims.approveClaim');
    });

    Route::prefix('currency')->group(function () {
        Route::get('/list-short-code', [CurrencyController::class, 'listShortCode'])->name('currency.listShortCode');
    });

    Route::prefix('payment-category')->group(function () {
        Route::get('/list', [PaymentCategoryController::class, 'list'])->name('paymentCategory.list');
        Route::get('/list-choice', [PaymentCategoryController::class, 'listChoice'])->name('paymentCategory.listChoice');
        Route::post('/create', [PaymentCategoryController::class, 'create'])->name('paymentCategory.create');
        Route::post('/{id}/update', [PaymentCategoryController::class, 'update'])->name('paymentCategory.update');
    });

    Route::prefix('user')->group(function () {
        Route::get('/details', [UserController::class, 'userDetails'])->name('user.details');
        Route::post('/create', [UserController::class, 'create'])->name('user.create');
        Route::post('/{id}/update', [UserController::class, 'update'])->name('user.update');
    });

    Route::prefix('users')->group(function () {
        Route::get('/list', [UserController::class, 'list'])->name('users.list');
    });

    Route::prefix('settings')->group(function () {
        Route::get('/approval-roles/list', [SettingController::class, 'listApprovalRoles'])->name('approvalRoles.list');
    });
});
