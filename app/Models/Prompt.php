<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Prompt extends Model
{
    use HasFactory;
    protected $fillable = ["prompt_title", "prompt_content", "prompt_author_id"];
    public function user()
    {
        return $this->belongsTo(User::class, 'prompt_author_id');
    }

    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes')->withTimestamps();
    }
}