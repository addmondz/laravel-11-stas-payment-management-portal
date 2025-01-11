<?php

use App\Http\Controllers\ApprovalStatusController;
use App\Http\Controllers\ClaimController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\PaymentCategoryController;
use App\Http\Controllers\PaymentReceiverController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VariableController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->middleware('auth')->group(function () {
    // Route::prefix('product')->group(function () {
    //     Route::get('/', [ProductController::class, 'index'])->name('product.list');
    //     Route::post('/add-to-cart', [ProductController::class, 'addToCart'])->name('product.addToCart');
    // });

    Route::prefix('claims')->group(function () {
        Route::get('/list', [ClaimController::class, 'list'])->name('claims.list');
        Route::get('/list-ids', [ClaimController::class, 'listIds'])->name('claims.listIds');
        Route::get('/list-pending-approval', [ClaimController::class, 'listPendingApproval'])->name('claims.listPendingApproval');
        Route::post('/store', [ClaimController::class, 'store'])->name('claims.store');
        Route::get('/{id}/fetch', [ClaimController::class, 'fetchData'])->name('claims.fetchData');
        Route::post('/{id}/approve', [ClaimController::class, 'approveClaim'])->name('claims.approveClaim');
        Route::post('/{id}/payment-completed', [ClaimController::class, 'paymentCompleted'])->name('claims.paymentCompleted');
        Route::post('/group-approve-claims/{ids}', [ClaimController::class, 'groupApprove'])->name('claims.groupApprove');
    });

    Route::prefix('currency')->group(function () {
        Route::get('/list-short-code', [CurrencyController::class, 'listShortCode'])->name('currency.listShortCode');
    });

    Route::prefix('variables')->group(function () {
        Route::get('/fetch-gst', [VariableController::class, 'fetchesGst'])->name('variables.fetchesGst');
        Route::post('/update-gst', [VariableController::class, 'updateGst'])->name('variables.updateGst');
    });

    Route::prefix('payment-category')->group(function () {
        Route::get('/list', [PaymentCategoryController::class, 'list'])->name('paymentCategory.list');
        Route::get('/list-choice', [PaymentCategoryController::class, 'listChoice'])->name('paymentCategory.listChoice');
        Route::post('/create', [PaymentCategoryController::class, 'create'])->name('paymentCategory.create');
        Route::post('/{id}/update', [PaymentCategoryController::class, 'update'])->name('paymentCategory.update');
    });

    Route::prefix('payment-receiver')->group(function () {
        Route::get('/list', [PaymentReceiverController::class, 'list'])->name('paymentReceiver.list');
        Route::post('/create', [PaymentReceiverController::class, 'create'])->name('paymentReceiver.create');
        Route::post('/{id}/update', [PaymentReceiverController::class, 'update'])->name('paymentReceiver.update');
        Route::get('/list-name-and-id', [PaymentReceiverController::class, 'listNameAndId'])->name('paymentReceiver.listNameAndId');
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

    Route::prefix('reports')->group(function () {
        Route::post('/summary-report/{dateFrom}/{dateTo}', [ReportsController::class, 'summaryReport'])->name('reports.newSummaryReport');
        Route::post('/transactions-report/{dateFrom}/{dateTo}', [ReportsController::class, 'transactionsReport'])->name('reports.transactionsReport');
        Route::post('/payment-detail-report/{dateFrom}/{dateTo}', [ReportsController::class, 'paymentDetailReport'])->name('reports.paymentDetailReport');
        Route::post('/generate-report-preview/{reportType}', [ReportsController::class, 'generateReportPreview'])->name('reports.generateReportPreview');
        Route::post('/export-pdf/{reportType}', [ReportsController::class, 'exportPDF'])->name('reports.exportPDF');
    });

    Route::prefix('approval-status')->group(function () {
        Route::get('/list', [ApprovalStatusController::class, 'list'])->name('approvalStatus.list');
    });

});
