@extends('layouts.layout')

@section('title', 'Prompt created by: {{ $prompt->user->name }}')

@section('main_content')
    <section class="prompts mt-5 mb-5" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title mb-5">Prompt created by: {{ $prompt->user->name }}</h2>
                <div class="prompts__data">
                    <div class="prompts__item-group mb-4">
                        <h3 class="prompts__title">
                            {{ $prompt->prompt_title }}
                        </h3>
                        <button class="prompts__item-copy card p-1">
                            <svg>
                                <use xlink:href='#clipboard'></use>
                            </svg>
                        </button>
                    </div>
                    <div class="prompts__content mb-4">
                        {{ $prompt->prompt_content }}
                    </div>
                    <div class="prompts__date">{{ $prompt->created_at->format('Y, d F') }}</div>
                    @if (Auth::check() && $prompt->prompt_author_id == Auth::user()->id)
                        <div class="prompts__actions mt-5">
                            <a href="{{ route('prompts.edit', $prompt) }}"
                                class="prompts__button-edit btn btn-outline-primary">Edit this
                                prompt</a>
                            <form action="{{ route('prompts.destroy', $prompt) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="prompts__button-delete btn btn-danger">Delete
                                    this prompt</button>
                            </form>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </section>
@endsection
