<?php

namespace App\Http\Controllers;

use App\Models\PaymentCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentCategoryController extends Controller
{
    public function list(Request $request)
    {
        try {
            // Define the base query
            $query = PaymentCategory::query()->orderBy('name');

            // if ($request->input('paymentType')) {
            //     $query->where('payment_type', $request->input('paymentType'));
            // }

            $searchValue = $request->input('search_value');
            if ($searchValue) {
                $queryParam = ['name'];
                $query->where(function ($query) use ($queryParam, $searchValue) {
                    foreach ($queryParam as $q) {
                        $query->orWhere($q, 'like', '%' . $searchValue . '%');
                    }
                });
            }

            // Apply sorting if provided
            $sortColumn = $request->input('sort.column', 'id');
            $sortDirection = $request->input('sort.direction', 'asc');
            $query->orderBy($sortColumn, $sortDirection);

            // Paginate the results
            $perPage = $request->get('per_page', 10); // Default to 10 items per page
            $datas = $query->paginate($perPage);

            $datas->getCollection()->transform(function ($data) {
                $data->name = ucwords($data->name);
                return $data;
            });

            // Return the response in a structured format
            return response()->json([
                'success' => true,
                'data' => $datas,
                'message' => 'Payment Categories fetched successfully',
            ]);
        } catch (\Exception $e) {
            // Log the error with detailed information
            Log::error('Error listing Payment Categories', [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while listing Payment Categories',
            ], 500);
        }
    }

    public function listChoice()
    {
        return PaymentCategory::all()
            ->map(function ($category) {
                $category->name = ucwords($category->name);
                return $category;
            })
            ->pluck('name', 'id');
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        PaymentCategory::create([
            'name' => $validatedData['name'],
        ]);

        return response()->json([
            'message' => 'Payment Category created successfully',
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $user = PaymentCategory::find($id);
        $user->update([
            'name' => $validatedData['name'],
        ]);

        return response()->json([
            'message' => 'Payment Category updated successfully',
        ], 201);
    }
}
