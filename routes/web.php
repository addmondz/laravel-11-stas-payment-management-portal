<?php

use App\Classes\ValueObjects\Constants\ApprovalStatus;
use App\Http\Controllers\ProfileController;
use App\Models\Claim;
use App\Models\PaymentGroup;
use App\Models\PaymentGroupChild;
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

Route::get('/payment/{id}', function ($id) {
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

Route::get('/report/preview', function () {
    return Inertia::render('ReportPreview');
})->middleware(['auth', 'verified'])->name('report.preview');

Route::get('/reports', function () {
    return Inertia::render('Reports');
})->middleware(['auth', 'verified'])->name('reports');

Route::get('/completed-payments', function () {
    return Inertia::render('PaymentGroups');
})->middleware(['auth', 'verified'])->name('paymentGroups');

Route::get('/make-approved-payments-to-groups', function () {
    $unGroupedClaims = Claim::whereNotIn('id', function ($query) {
        $query->select('claim_id')->from('payment_groups_child');
    })->where('status', ApprovalStatus::PAYMENT_COMPLETED)
        ->get();

    if (!count($unGroupedClaims)) {
        dump('No Payments Found');
        return;
    }

    foreach ($unGroupedClaims as $c) {
        dump($c->id);
        $paymentGroup = PaymentGroup::create([
            'payment_voucher_number'       => $c->payment_voucher_number,
            'payment_date'                 => $c->payment_date,
            'payment_voucher_receipt_file' => $c->payment_voucher_receipt_file,
            'payment_mode'                 => $c->payment_mode,
        ]);

        PaymentGroupChild::create([
            'payment_group_id' => $paymentGroup->id,
            'claim_id' => $c->id, // Associating this claim with the payment group
        ]);
    }
});

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
