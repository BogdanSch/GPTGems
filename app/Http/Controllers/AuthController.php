<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register()
    {
        return view("auth.sign-up");
    }
    public function registerPost(Request $request)
    {
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();
        return back()->with('success', 'Registered successfully');
    }

    public function login()
    {
        return view('auth.sign-in');
    }
    public function loginPost(Request $request)
    {
        $credetials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($credetials)) {
            return to_route("home")->with('message', 'Logged in Successfully');
        }

        return back()->with('error', 'Please, provide correct Email and Password');
    }

    public function logout()
    {
        Auth::logout();
        return to_route("home")->with("message", "Successfully logged out!");
    }
    public function profile()
    {
        return view("auth.profile");
    }
}
