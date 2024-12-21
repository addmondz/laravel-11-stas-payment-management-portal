<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userDetails()
    {
        $user = User::with('membershipType')->find(Auth::id());

        return response()->json($user);
    }

    public function list(Request $request)
    {
        try {
            // Define the base query
            $query = User::query();

            // Apply sorting if provided
            $sortColumn = $request->input('sort.column', 'id');
            $sortDirection = $request->input('sort.direction', 'asc');
            $query->orderBy($sortColumn, $sortDirection);

            // Paginate the results
            $perPage = $request->get('per_page', 10); // Default to 10 items per page
            $users = $query->paginate($perPage);

            // Return the response in a structured format
            return response()->json([
                'success' => true,
                'data' => $users,
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
                'message' => 'An error occurred while listing users',
            ], 500);
        }
    }
}
