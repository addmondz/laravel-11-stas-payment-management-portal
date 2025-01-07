<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserPrivilege;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

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
            $query = User::with('privileges');

            // Apply dynamic filters
            foreach (['email', 'name', 'role'] as $filter) {
                $query->when(
                    $request->filled($filter),
                    function ($q) use ($filter, $request) {
                        // like filters for special columns
                        if (in_array($filter, ['email', 'name'])) {
                            $q->where($filter, 'LIKE', '%' . $request->input($filter) . '%');
                        } else {
                            $q->where($filter, $request->input($filter));
                        }
                    }
                );
            }

            // Apply sorting and pagination
            $users = $query
                ->orderBy($request->input('sort_by', 'id'), $request->input('sort_order', 'asc'))
                ->paginate($request->get('per_page', 10));


            // Assuming one privilege per user, transform the privilege name
            $users->getCollection()->each(function ($user) {
                if ($user->privileges->isNotEmpty()) {
                    $user->privilege_name = \App\Classes\ValueObjects\Constants\ApprovalRoles::APPROVAL_ROLES_ID[$user->privileges->first()->approval_role_id] ?? 'Unknown Privilege';
                    $user->approval_role_id = $user->privileges->first()->approval_role_id;
                }
            });

            return response()->json(['success' => true, 'data' => $users, 'message' => 'Users fetched successfully']);
        } catch (\Exception $e) {
            Log::error('Error listing users', $e->getMessage());
            return response()->json(['success' => false, 'message' => 'An error occurred while listing users'], 500);
        }
    }

    public function create(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'string',
        ]);

        $userData = [
            'name' => ucwords($validatedData['name']),
            'email' => $validatedData['email'],
            'role' => $validatedData['role'],
            'password' => Hash::make($validatedData['password']), // Hash the password
        ];

        // Create the user
        $user = User::create($userData);

        // create approvalRole for user
        if ($request->input('approvalRole')) {
            UserPrivilege::create([
                'user_id'               => $user->id,
                'approval_role_id'      => $request->input('approvalRole'),
            ]);
        }

        // Return a success response
        return response()->json([
            'message' => 'User created successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
        ], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id, // Ignore the email check for the user being updated
            'password' => 'nullable|string|min:8|confirmed', // Password is nullable
            'role' => 'string',
        ]);

        // Prepare the user data
        $userData = [
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'role' => $validatedData['role'],
        ];

        // Check if a password was provided and hash it if necessary
        if ($request->filled('password')) {
            $userData['password'] = Hash::make($validatedData['password']);
        }

        // Find the user by ID
        $user = User::findOrFail($id); // Ensure the user exists
        $user->update($userData);

        // Create or update approvalRole for user if provided
        if ($request->input('approvalRole') && $request->input('approvalRole') != 'undefined') {
            UserPrivilege::updateOrCreate(
                ['user_id' => $user->id],
                ['approval_role_id' => $request->input('approvalRole')]
            );
        } else {
            UserPrivilege::where('user_id', $user->id)->delete();
        }

        // Return a success response
        return response()->json([
            'message' => 'User updated successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
        ], 200);
    }
}
