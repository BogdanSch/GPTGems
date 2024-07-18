<?php

namespace App\Http\Controllers;

use App\Http\Resources\PromptResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Prompt;
use App\Models\Like;
use App\Rules\TenWords;

class PromptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Prompt::query();
        $prompts = $query->orderBy("created_at", "desc")->paginate(10)->onEachSide(1);

        $user = Auth::user();
        if ($user) {
            $user->load('likes');
        }

        return inertia("Prompts/Index", [
            "prompts" => PromptResource::collection($prompts),
            "search" => "All"
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Prompts/Create");
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "prompt_title" => ["required", "string"],
            "prompt_content" => ["required", "string", new TenWords()],
        ]);
        $userId = Auth::id();
        $data["prompt_author_id"] = $userId;
        $prompt = Prompt::create($data);
        return to_route("prompts.show", ["prompt" => $prompt])->with("message", "Prompt was created successfull!");
    }
    /**
     * Display the specified resource.
     */
    public function show(Prompt $prompt)
    {
        $prompt->load('user', 'likes');
        if (!$prompt) {
            abort(404);
        }
        return inertia("Prompts/Show", ["prompt" => new PromptResource($prompt)]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prompt $prompt)
    {
        if ($prompt->prompt_author_id !== auth()->id()) {
            abort(403);
        }
        return view("prompt.edit", ["prompt" => $prompt]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prompt $prompt)
    {
        $data = $request->validate([
            "prompt_title" => ["required", "string"],
            "prompt_content" => ["required", "string"],
        ]);
        $prompt->update($data);
        return to_route("prompts.show", ["prompt" => $prompt])->with("message", "Prompt was updated successfully!");
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prompt $prompt)
    {
        if ($prompt->prompt_author_id !== auth()->id()) {
            abort(403);
        }
        $prompt->delete();
        return to_route("prompts.index")->with("message", "Prompt was deleted successfully!");
    }
    /**
     * Search the specified resource from storage.
     */
    public function search(Request $request)
    {
        $search = $request->input('search');
        $prompts = Prompt::where('prompt_content', 'like', "%$search%")
            ->orWhereHas('user', function ($query) use ($search) {
                $query->where('name', 'like', "%$search%");
            })
            ->orderBy("created_at", "desc")
            ->paginate(10);
        return view("prompt.index", ["prompts" => $prompts, "search" => $search]);
    }
    public function like(Prompt $prompt)
    {
        $user = Auth::user();

        if (!$user->likes()->where('prompt_id', $prompt->id)->exists()) {
            Like::create([
                'user_id' => $user->id,
                'prompt_id' => $prompt->id,
            ]);
        }

        return back()->with('message', 'You liked the prompt!');
    }
    public function unlike(Prompt $prompt)
    {
        $user = Auth::user();

        if ($user->likes()->where('prompt_id', $prompt->id)->exists()) {
            Like::where('user_id', $user->id)
                ->where('prompt_id', $prompt->id)
                ->delete();
        }

        return back()->with('message', 'You disliked the prompt!');
    }
}
