<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Prompt;

class PromptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prompts = Prompt::query()->orderBy("created_at", "desc")->paginate(10);
        return view("prompt.index", ["prompts" => $prompts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("prompt.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "prompt_title" => ["required", "string"],
            "prompt_content" => ["required", "string"],
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
        return view("prompt.show", ["prompt" => $prompt]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prompt $prompt)
    {
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
}