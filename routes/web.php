<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [HomeController::class, "index"])->name("home");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


// Route::get('/about', function () {
//     return view('about');
// })->name("about");

// Route::get('/contact', function () {
//     return view('contact');
// })->name("contact");

// Route::get('/sign-up', [AuthController::class, "register"])->name("sign-up");
// Route::post("/sign-up", [AuthController::class, "registerPost"])->name("sign-up");
// Route::get('/sign-in', [AuthController::class, "login"])->name("sign-in");
// Route::post('/sign-in', [AuthController::class, "loginPost"])->name("sign-in");

// Route::resource("prompts", PromptController::class);
// Route::get('/search-prompts', [PromptController::class, "search"])->name('prompts.search');

// Route::group(["middleware" => "auth"], function () {
//     Route::delete('/prompts/{id}', [PromptController::class, "destroy"])->name("prompt.destroy");
//     Route::get('/prompts/create', [PromptController::class, "create"])->name("prompt.create");
//     Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');
//     Route::get('/profile', [AuthController::class, 'profile'])->name('profile.index');
//     Route::get('/profile/update', [AuthController::class, 'update'])->name('profile.update');
//     Route::post('/profile/update', [AuthController::class, 'updatePost'])->name('profile.update');
//     Route::post('/prompts/{prompt}/like', [PromptController::class, 'like'])->name('prompts.like');
//     Route::post('/prompts/{prompt}/unlike', [PromptController::class, 'unlike'])->name('prompts.unlike');
// });
