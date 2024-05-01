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

// Route::get('/prompts', [PromptController::class, "index"])->name("prompt.index");
// Route::get('/prompts/create', [PromptController::class, "create"])->name("prompt.create");
// Route::post('/prompts', [PromptController::class, "store"])->name("prompt.store");
// Route::get('/prompts/{id}', [PromptController::class, "show"])->name("prompt.show");
// Route::get('/prompts/{id}/edit', [PromptController::class, "edit"])->name("prompt.edit");
// Route::put('/prompts/{id}', [PromptController::class, "update"])->name("prompt.update");
// Route::delete('/prompts/{id}', [PromptController::class, "destroy"])->name("prompt.destroy");
Route::resource("prompts", PromptController::class);
Route::get('/search-prompts', [PromptController::class, "search"])->name('prompts.search');

Route::get('/sign-up', [AuthController::class, "register"])->name("sign-up");
Route::post("/sign-up", [AuthController::class, "registerPost"])->name("sign-up");
Route::get('/sign-in', [AuthController::class, "login"])->name("sign-in");
Route::post('/sign-in', [AuthController::class, "loginPost"])->name("sign-in");

Route::group(["middleware" => "auth"], function () {
    // Route::delete('/prompts/{id}', [PromptController::class, "destroy"])->name("prompt.destroy");
    Route::get('/prompts/create', [PromptController::class, "create"])->name("prompt.create");
    Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/profile', [AuthController::class, 'profile'])->name('profile');
});