<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prompt;

class HomeController extends Controller
{
    public function index()
    {
        $prompts = Prompt::query()->orderBy("created_at", "desc")->paginate(10);
        return view("home", ["prompts" => $prompts]);
    }
}