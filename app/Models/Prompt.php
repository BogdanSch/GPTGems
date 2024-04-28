<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prompt extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo(User::class, 'prompt_author_id');
    }
    protected $fillable = ["prompt_title", "prompt_content", "prompt_author_id"];
}