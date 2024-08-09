<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use App\Http\Middleware\HandleInertiaRequests;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Auth\Access\AuthorizationException;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
    /**
     * Render application's exception handling callbacks.
     */
    public function render($request, Throwable $exception)
    {
        $sharedProps = app(HandleInertiaRequests::class)->share($request);

        if ($exception instanceof AuthorizationException) {
            return inertia('Errors/AccessDenied', array_merge($sharedProps, [
                'status' => 403,
            ]))->toResponse($request)->setStatusCode(403);
        }

        if ($exception instanceof NotFoundHttpException) {
            return inertia('Errors/NotFound', array_merge($sharedProps, [
                'status' => 404,
            ]))->toResponse($request)->setStatusCode(404);
        }

        return parent::render($request, $exception);
    }
}
