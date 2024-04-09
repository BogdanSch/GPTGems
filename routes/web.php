<?php

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
});

Route::get('/contact', function () {
    return view('contact');
});

// Route::get('/prompts', [PromptController::class, "index"])->name("prompt.index");
// Route::get('/prompts/create', [PromptController::class, "create"])->name("prompt.create");
// Route::post('/prompts', [PromptController::class, "store"])->name("prompt.store");
// Route::get('/prompts/{id}', [PromptController::class, "show"])->name("prompt.show");
// Route::get('/prompts/{id}/edit', [PromptController::class, "edit"])->name("prompt.edit");
// Route::put('/prompts/{id}', [PromptController::class, "update"])->name("prompt.update");
// Route::delete('/prompts/{id}', [PromptController::class, "destroy"])->name("prompt.destroy");
Route::resource("prompts", PromptController::class);