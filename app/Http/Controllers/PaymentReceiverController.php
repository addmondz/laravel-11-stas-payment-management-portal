<?php

namespace App\Http\Controllers;

use App\Models\PaymentReceiver;
use Illuminate\Http\Request;

class PaymentReceiverController extends Controller
{
    public function listNameAndId(Request $request)
    {
        return PaymentReceiver::all()
            ->map(function ($receiver) {
                $receiver->name = ucwords($receiver->name);
                return [
                    'id' => $receiver->id,
                    'name' => $receiver->name,
                ];
            });
    }

    public function list(Request $request)
    {
        $query = PaymentReceiver::with('currency');

        // Apply dynamic filters
        foreach (['name', 'bank_name', 'currency_id'] as $filter) {
            $query->when(
                $request->filled($filter),
                function ($q) use ($filter, $request) {
                    // like filters for special columns
                    if (in_array($filter, ['name', 'bank_name'])) {
                        $q->where($filter, 'LIKE', '%' . $request->input($filter) . '%');
                    } else {
                        $q->where($filter, $request->input($filter));
                    }
                }
            );
        }

        $receivers = $query->paginate($request->input('per_page', 10));

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
