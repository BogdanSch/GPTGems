import React from "react";
import { usePage, Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

@extends('layouts.layout')

@section('title', 'Prompt created by: ' . $prompt->user->name)

@section('main_content')
    <section class="prompts mt-5 mb-5" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title mb-5">Prompt created by: {{ $prompt->user->name }}</h2>
                <div class="prompts__data">
                    <div class="prompts__item-group">
                        <h3 class="prompts__title">
                            {{ $prompt->prompt_title }}
                        </h3>
                        <div class="prompts__item-elements">
                            <button class="prompts__item-copy card p-1">
                                <svg>
                                    <use xlink:href='#clipboard'></use>
                                </svg>
                            </button>
                            @auth
                                @if (Auth::user()->likes->contains($prompt->id))
                                    <form action="{{ route('prompts.unlike', $prompt) }}" method="POST">
                                        @csrf
                                        <button type="submit" class="prompts__item-like card p-1">
                                            <svg>
                                                <use xlink:href='#heartFill'></use>
                                            </svg>
                                        </button>
                                    </form>
                                @else
                                    <form action="{{ route('prompts.like', $prompt) }}" method="POST">
                                        @csrf
                                        <button type="submit" class="prompts__item-like card p-1">
                                            <svg>
                                                <use xlink:href='#heart'></use>
                                            </svg>
                                        </button>
                                    </form>
                                @endif
                            @endauth
                        </div>
                    </div>
                    <div class="prompts__content mb-4">
                        <div class="prompts__content-like">
                            <span>{{ $prompt->likes()->count() }}</span>
                            <svg>
                                @if (Auth::user()->likes->contains($prompt->id))
                                    <use xlink:href='#heartFill'></use>
                                @else
                                    <use xlink:href='#heart'></use>
                                @endif
                            </svg>
                        </div>
                        {{ $prompt->prompt_content }}
                    </div>
                    <div class="prompts__date">{{ $prompt->created_at->format('Y, d F') }}</div>
                    @auth
                        @if (Auth::user()->id === $prompt->prompt_author_id)
                            <div class="prompts__actions mt-5">
                                <a href="{{ route('prompts.edit', $prompt) }}"
                                    class="prompts__button-edit btn btn-outline-primary">Edit this prompt</a>
                                <form action="{{ route('prompts.destroy', $prompt) }}" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="prompts__button-delete btn btn-danger">Delete this
                                        prompt</button>
                                </form>
                            </div>
                        @endif
                    @endauth
                </div>
            </div>
        </div>
    </section>
@endsection


export default function Show() {
    
    return <>

    <Head title="Latest Prompts" />
            <Authenticated>

            </Authenticated>
    </>;
}
