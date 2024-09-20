<?php

namespace App\Http\Controllers\AuthServices;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    /**
     * Redirects the user to google auth service
     */
    public function redirect(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }
    /**
     * Creates a new user if the login operation was successful
     */
    public function callback(): RedirectResponse
    {
        $googleAccount = Socialite::driver('google')->user();

        if (!empty($googleAccount)) {
            $user = User::updateOrCreate([
                "auth_provider_id" => $googleAccount->id,
            ], [
                "name" => $googleAccount->name,
                "email" => $googleAccount->email,
                "password" => Hash::make(Str::random(8)),
            ]);

            Auth::login($user);
            return redirect()->route("home")->with("message", "You have successfully logged in via Google!");
        }
        return redirect()->route("home")->with("message", "An error's occurred during the authentication. Please, try again later!");
    }
}
