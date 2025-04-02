<?php

use App\Http\Controllers\ApprovalStatusController;
use App\Http\Controllers\ClaimController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\EmailConfigController;
use App\Http\Controllers\PaymentCategoryController;
use App\Http\Controllers\PaymentGroupController;
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

    Route::prefix('email-config')->group(function () {
        Route::get('/get', [EmailConfigController::class, 'get'])->name('email_config.get');
        Route::post('/upsert', [EmailConfigController::class, 'upsert'])->name('email_config.upsert');
        Route::get('/test', [EmailConfigController::class, 'testConfig'])->name('email_config.test');
        Route::get('/get-templates', [EmailConfigController::class, 'getTemplates'])->name('email_config.get_templates');
        Route::post('/upsert-template/{et?}', [EmailConfigController::class, 'upsertTemplate'])->name('email_config.upsert_template');
        Route::get('/template-send-mail/{et}', [EmailConfigController::class, 'templateSendMail'])->name('email_config.template_send_mail');
    });

    Route::prefix('claims')->group(function () {
        Route::get('/list', [ClaimController::class, 'list'])->name('claims.list');
        Route::get('/list-ids', [ClaimController::class, 'listIds'])->name('claims.listIds');
        Route::get('/list-pending-approval', [ClaimController::class, 'listPendingApproval'])->name('claims.listPendingApproval');
        Route::post('/store', [ClaimController::class, 'store'])->name('claims.store');
        Route::get('/{id}/fetch', [ClaimController::class, 'fetchData'])->name('claims.fetchData');
        Route::post('/{id}/approve', [ClaimController::class, 'approveClaim'])->name('claims.approveClaim');
        Route::post('/{id}/cancel', [ClaimController::class, 'cancelClaim'])->name('claims.cancelPayment');
        Route::post('/{id}/payment-completed', [ClaimController::class, 'paymentCompleted'])->name('claims.paymentCompleted');
        Route::post('payment-voucher/{id}/update', [ClaimController::class, 'updatePaymentVoucherDetails'])->name('claims.paymentCompletedUpdate');
        Route::delete('payment-voucher/{id}', [ClaimController::class, 'deletePaymentVoucherDetails'])->name('claims.deletePaymentVoucherDetails');
        Route::post('/group-approve-claims/{ids}', [ClaimController::class, 'groupApprove'])->name('claims.groupApprove');
        Route::post('/update/{claim}', [ClaimController::class, 'update'])->name('claims.update');
        Route::post('/{id}/delete', [ClaimController::class, 'delete'])->name('claims.delete');
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
        Route::get('/list-id-to-name', [PaymentReceiverController::class, 'listIdToName'])->name('paymentReceiver.listIdToName');
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
        Route::post('/export-payment-group-pdf', [ReportsController::class, 'exportPaymentGroupPDF'])->name('reports.exportPaymentGroupPDF');
    });

    Route::prefix('approval-status')->group(function () {
        Route::get('/list', [ApprovalStatusController::class, 'list'])->name('approvalStatus.list');
    });

    Route::prefix('payment-grousp')->group(function () {
        Route::get('/list', [PaymentGroupController::class, 'list'])->name('paymentGroup.list');
    });

});
