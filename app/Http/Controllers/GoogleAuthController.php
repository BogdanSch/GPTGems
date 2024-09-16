<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    /**
     * Redirects the user to google auth service
     */
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }
    /**
     * Creates a new user if the login operation was successful
     */
    public function callback()
    {
        $googleAccount = Socialite::driver('google')->user();

        if (!empty($googleAccount)) {
            $user = User::updateOrCreate([
                "google_id" => $googleAccount->id,
            ], [
                "name" => $googleAccount->name,
                "email" => $googleAccount->email,
                "password" => Hash::make(Str::random(8)),
            ]);

            Auth::login($user);
            return redirect()->route("home")->with("message", "You have successfully logged in!");
        }
        return redirect()->route("home")->with("message", "An error's occurred during the authentication. Please try again later!");
    }
}
