<?php
namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class PromptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = Auth::user();
        $userLikes = $user ? $user->likes->pluck('id')->toArray() : [];


        return [
            "id" => $this->id,
            "prompt_title" => $this->prompt_title,
            "prompt_content" => $this->prompt_content,
            "prompt_author" => new UserResource($this->user),
            "created_at" => (new Carbon($this->created_at))->format("Y-m-d"),
            "likes_count" => $this->likes()->count(),
            "is_liked_by_user" => in_array($this->id, $userLikes),
        ];
    }
}
