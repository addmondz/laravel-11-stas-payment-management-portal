<?php

use App\Http\Controllers\ClaimController;
use App\Http\Controllers\CurrencyController;
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
    });

    Route::prefix('currency')->group(function () {
        Route::get('/list-short-code', [CurrencyController::class, 'listShortCode'])->name('currency.listShortCode');
    });

    Route::prefix('user')->group(function () {
        Route::get('/details', [UserController::class, 'userDetails'])->name('user.details');
    });

    Route::prefix('users')->group(function () {
        Route::get('/list', [UserController::class, 'list'])->name('users.list');
    });

});
