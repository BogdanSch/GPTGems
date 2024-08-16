<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PromptController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;

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

Route::resource("prompts", PromptController::class);
Route::get('/search-prompts', [PromptController::class, "search"])->name('prompts.search');

Route::middleware("auth")->group(function () {
    Route::middleware("verified")->group(function () {
        Route::get('/profile', [ProfileController::class, "index"])->name('dashboard');
        Route::get('/profile/edit', [ProfileController::class, "edit"])->name('profile.edit');
        Route::patch('/profile/update', [ProfileController::class, "update"])->name('profile.update');
        Route::post('/profile/update/picture', [ProfileController::class, "updateProfilePicture"])->name('profile.updateProfilePicture');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
    Route::post('/prompts/{prompt}/like', [PromptController::class, 'like'])->name('prompts.like');
    Route::post('/prompts/{prompt}/unlike', [PromptController::class, 'unlike'])->name('prompts.unlike');
});


require __DIR__ . '/auth.php';

Route::get('/about', [AboutController::class, "index"])->name("about");
Route::get('/contact', [ContactController::class, "index"])->name("contact");
