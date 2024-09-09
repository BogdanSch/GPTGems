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
     * Creates a new userm if the operation was successful
     */
    public function callback()
    {
        $google_account = Socialite::driver('google')->user();

        if (!empty($google_account)) {
            $user = User::updateOrCreate([
                "google_id" => $google_account->id,
            ], [
                "name" => $google_account->name,
                "email" => $google_account->email,
                "password" => Hash::make(Str::random(8)),
            ]);

            Auth::login($user);
            return redirect()->route("home");
        }
        return redirect()->route("home")->with("message", "There was an error while authenticating. Please, try again later!");
    }
}
