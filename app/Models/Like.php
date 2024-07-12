<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Like extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'prompt_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function prompt()
    {
        return $this->belongsTo(Prompt::class);
    }
}
