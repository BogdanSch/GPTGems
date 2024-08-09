<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $userResource = null;
        if ($request->user() !== null) {
            $userResource = new UserResource($request->user());
        }
        $flashMessage = $request->hasSession() ? $request->session()->get('message') : null;

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $userResource,
            ],
            'csrf' => csrf_token(),
            'flash' => [
                'message' => $flashMessage
            ],
        ];
    }
}
