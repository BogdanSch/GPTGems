<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prompt;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $prompts = Prompt::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Home', [
            "prompts" => $prompts,
            "showPromptPagination" => true,
            "search" => "All"
        ]);
    }
}
