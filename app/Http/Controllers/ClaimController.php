<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Claim;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ClaimController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());

        $user = auth()->user();

        // Validate the incoming request
        $validated = $request->validate([
            'payment_type' => 'required|in:reimbursement,external_payment',
            'payment_category' => 'required|string',
            'currency' => 'required',
            'amount' => 'required|numeric',
            'gst' => 'required|in:1,0',
            'purpose' => 'required|string',
            'receipt_date' => 'required|date',
            'receipt' => 'required|mimes:jpeg,pdf,jpg,png|max:2048',
        ]);

        // Handle the file upload if it exists
        if ($request->hasFile('receipt')) {
            $path = $request->file('receipt')->store('receipts', 'public');
        }

        $requestData = $request->all();

        $hasGst = filter_var($requestData['gst'], FILTER_VALIDATE_BOOLEAN);

        // Create a new claim record
        try {
            $claim = Claim::create([
                'created_by'            => $user->id,
                'payment_type'          => $requestData['payment_type'],
                'payment_category'      => $requestData['payment_category'],
                'currency'              => $requestData['currency'],
                'amount'                => $requestData['amount'],
                'purpose'               => $requestData['purpose'],
                'receipt_date'          => $requestData['receipt_date'],
                'receipt_file'          => $path ?? null,

                // field to update later
                'payment_to'            => $user->id,
                'gst_amount'            => $hasGst ? ($requestData['amount'] * 0.06) : 0,
                'gst_percent'           => '6',
                'bank_account_id'       => '1',
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating claim: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while creating the claim.',
            ], 500);
        }

        // Return success in JSON
        return response()->json([
            'success' => 'Claim created successfully!',
        ], 201);
    }

    public function list(Request $request)
    {
        try {
            // Define the base query
            $query = Claim::query();

            // Apply sorting if provided
            $sortColumn = $request->input('sort.column', 'id');
            $sortDirection = $request->input('sort.direction', 'asc');
            $query->orderBy($sortColumn, $sortDirection);

            // Paginate the results
            $perPage = $request->get('per_page', 10); // Default to 10 items per page
            $datas = $query->paginate($perPage);

            $datas->getCollection()->transform(function ($data) {
                $data->currency = $data->getCurrencyObject->short_code;
                return $data;
            });

            // Return the response in a structured format
            return response()->json([
                'success' => true,
                'data' => $datas,
                'message' => 'Claims fetched successfully',
            ]);
        } catch (\Exception $e) {
            // Log the error with detailed information
            Log::error('Error listing users', [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while listing claims',
            ], 500);
        }
    }
}
