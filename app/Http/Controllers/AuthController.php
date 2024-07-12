<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Prompt;
use App\Models\Like;
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
        $data = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'email', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
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

        return back()->with('error', 'No such user was found! Please, provide correct email and password');
    }

    public function logout()
    {
        Auth::logout();
        return to_route("home")->with("message", "Successfully logged out!");
    }
    public function profile()
    {
        $user = Auth::user();
        $userId = Auth::id();
        $userName = $user->name;

        $prompts = Prompt::where("prompt_author_id", $userId)
            ->orderBy("created_at", "desc")
            ->paginate(10);
        $likedPrompts = null;
        if ($user->likes()->count() > 0) {
            $likedPrompts = $user->likes()->with('user')->paginate(10);
        }

        return view("auth.profile", ["prompts" => $prompts, "user" => $userName, "likedPrompts" => $likedPrompts]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'profile_photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $imagePath = "dist/images/profile/";

        if ($request->hasFile('profile_photo')) {
            $image = $request->file('profile_photo');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path($imagePath), $imageName);

            $user = Auth::user();
            $user->profile_photo_path = $imagePath . $imageName;
            $user->save();
        }

        return redirect()->back()->with('message', 'Profile picture uploaded successfully.');
    }
}
