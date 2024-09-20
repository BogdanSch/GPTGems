<?php

namespace App\Http\Controllers\AuthServices;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Laravel\Socialite\Facades\Socialite;

class GithubAuthController extends Controller
{
    /**
     * Redirects the user to github auth service
     */
    public function redirect(): RedirectResponse
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Creates a new user if the login operation was successful
     */
    public function callback(): RedirectResponse
    {
        $githubAccount = Socialite::driver('github')->user();

        if (!empty($githubAccount)) {
            $user = User::updateOrCreate([
                'auth_provider_id' => $githubAccount->getId(),
            ], [
                'email' => $githubAccount->getEmail(),
                'name' => $githubAccount->getName() ?? $githubAccount->getNickname(),
                'password' => $githubAccount->token,
            ]);

            Auth::login($user);
            return redirect()->route("home")->with("message", "You have successfully logged in via Github!");
        }

        return redirect()->route("home")->with("message", "An error's occurred during the authentication. Please, try again later!");
    }
}
