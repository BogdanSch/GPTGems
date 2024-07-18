<?php

namespace App\Http\Controllers;

use App\Models\Prompt;
use App\Http\Resources\PromptResource;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $query = Prompt::query();
        $prompts = $query->orderBy("created_at", "desc")->limit(10)->get();

        $user = Auth::user();
        if ($user) {
            $user->load('likes');
        }
        // $prompts = Prompt::orderBy("created_at", "desc")->paginate(10)->onEachSide(1);
        return inertia("Home", [
            "prompts" => PromptResource::collection($prompts)
        ]);
    }
}
