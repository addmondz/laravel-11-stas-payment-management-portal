<?php

namespace App\Http\Controllers;

use App\Models\PaymentReceiver;
use Illuminate\Http\Request;

class PaymentReceiverController extends Controller
{
    public function listNameAndId(Request $request)
    {
        return PaymentReceiver::all()
            ->map(function ($category) {
                $category->name = ucwords($category->name);
                return $category;
            })
            ->pluck('name', 'id'); //tod0-new: add currecy also 
    }

    public function list(Request $request)
    {
        $receivers = PaymentReceiver::with('currency')->paginate($request->input('per_page', 10));

        return response()->json([
            'success' => true,
            'data' => $receivers,
            'message' => 'Payment receivers listed successfully',
        ]);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'bank_name' => 'required|string|max:255',
            'bank_account_no' => 'required|string|max:50',
            'swift_code' => 'required|string|max:11',
            'currency_id' => 'required|exists:currencies,id',
        ]);

        PaymentReceiver::create($validatedData);

        return response()->json([
            'message' => 'Payment receiver created successfully',
            'data' => $validatedData,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'bank_name' => 'sometimes|required|string|max:255',
            'bank_account_no' => 'sometimes|required|string|max:50',
            'swift_code' => 'sometimes|required|string|max:11',
            'currency_id' => 'sometimes|required|exists:currencies,id',
        ]);

        $paymentReceiver = PaymentReceiver::findOrFail($id);
        $paymentReceiver->update($validatedData);

        return response()->json([
            'message' => 'Payment receiver updated successfully',
            'data' => $paymentReceiver,
        ], 200);
    }
}
