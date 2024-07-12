<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PromptController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, "index"])->name("home");

Route::get('/about', function () {
    return view('about');
})->name("about");

Route::get('/contact', function () {
    return view('contact');
})->name("contact");

Route::get('/sign-up', [AuthController::class, "register"])->name("sign-up");
Route::post("/sign-up", [AuthController::class, "registerPost"])->name("sign-up");
Route::get('/sign-in', [AuthController::class, "login"])->name("sign-in");
Route::post('/sign-in', [AuthController::class, "loginPost"])->name("sign-in");

Route::resource("prompts", PromptController::class);
Route::get('/search-prompts', [PromptController::class, "search"])->name('prompts.search');

Route::group(["middleware" => "auth"], function () {
    Route::delete('/prompts/{id}', [PromptController::class, "destroy"])->name("prompt.destroy");
    Route::get('/prompts/create', [PromptController::class, "create"])->name("prompt.create");
    Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/profile', [AuthController::class, 'profile'])->name('profile');
    Route::post('/profile/update', [AuthController::class, 'update'])->name('profile.update');
    Route::post('/prompts/{prompt}/like', [PromptController::class, 'like'])->name('prompts.like');
    Route::post('/prompts/{prompt}/unlike', [PromptController::class, 'unlike'])->name('prompts.unlike');
});
