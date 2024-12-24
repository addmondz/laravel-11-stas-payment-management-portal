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
            $users = User::with('privileges')
                ->orderBy($request->input('sort.column', 'id'), $request->input('sort.direction', 'asc'))
                ->paginate($request->get('per_page', 10));

            // Assuming one privilege per user, transform the privilege name
            $users->getCollection()->each(function ($user) {
                if ($user->privileges->isNotEmpty()) {
                    $user->privilege_name = \App\Classes\ValueObjects\Constants\ApprovalRoles::APPROVAL_ROLES_ID[$user->privileges->first()->privilege_id] ?? 'Unknown Privilege';
                    $user->privilege_id = $user->privileges->first()->privilege_id;
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
        ]);

        $userData = [
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']), // Hash the password
        ];

        if ($request->input('isAdmin')) {
            $userData['role'] = 'admin';
        }

        // Create the user
        $user = User::create($userData);

        // create approvalRole for user
        if ($request->input('approvalRole')) {
            UserPrivilege::create([
                'user_id'           => $user->id,
                'privilege_id'      => $request->input('approvalRole'),
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
            'email' => 'required|email|unique:users,email,' . $request->user()->id, // Ignore the email check for the current user
            'password' => 'nullable|string|min:8|confirmed', // Password is nullable
        ]);

        // Prepare the user data
        $userData = [
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
        ];

        // Check if a password was provided and hash it if necessary
        if ($request->filled('password')) {
            $userData['password'] = Hash::make($validatedData['password']);
        }

        // Update the user's role if necessary
        if ($request->input('isAdmin')) {
            $userData['role'] = 'admin';
        }

        // Get the current user and update their information
        $user = User::find($id);
        $user->update($userData);

        // Create approvalRole for user if provided
        if ($request->input('approvalRole')) {
            UserPrivilege::updateOrCreate(
                ['user_id' => $user->id],
                ['privilege_id' => $request->input('approvalRole')]
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
