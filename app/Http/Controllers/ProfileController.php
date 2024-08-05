<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use App\Http\Controllers\PromptController;
use App\Http\Resources\PromptResource;

class ProfileController extends Controller
{
    private const PROFILE_IMAGE_PATH = "/images/profile/";
    /**
     * Display the user's profile data.
     */
    public function index(): Response
    {
        $user = Auth::user();

        $prompts = PromptController::getAllUserPrompts($user);
        $likedPrompts = PromptController::getAllLikedUserPrompts($user);

        return inertia('Profile/Dashboard', ["prompts" => PromptResource::collection($prompts), "likedPrompts" => PromptResource::collection($likedPrompts)]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return inertia('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }
    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();
        Auth::logout();
        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::route('home');
    }
    /**
     * Remove the specified file from the public folder
     */
    private function removePublicFile($filePath)
    {
        if ($filePath === "/images/profile/default-profile.png")
            return;
        if (file_exists(public_path($filePath))) {
            unlink(public_path($filePath));
        }
    }
    /**
     * Update the user's profile picture
     */
    public function updateProfilePicture(Request $request)
    {
        $request->validate([
            'profile_photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('profile_photo')) {
            $user = Auth::user();

            $image = $request->file('profile_photo');
            $imageName = $user->name . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path(self::PROFILE_IMAGE_PATH), $imageName);

            $this->removePublicFile($user->profile_photo_path);

            $user->profile_photo_path = self::PROFILE_IMAGE_PATH . $imageName;
            $user->save();
        }

        return Redirect::route('dashboard')->with('message', 'Profile picture was uploaded successfully.');
    }
}
