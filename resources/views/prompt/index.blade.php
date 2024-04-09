@extends('layouts.layout')

@section('title', 'Latest Prompts')

@section('main_content')
    <section class="prompts" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title text-center">Discover all the latest prompts</h2>
                <form class="prompts__form mt-5" action="/search-prompts" method="get">
                    @csrf
                    <div class="input-group">
                        <input type="search" placeholder="Search for a tag or a username" name="search"
                            class="prompts__form-search form-control" id="promptsSearch">
                        <button type="submit" class="btn btn-primary input-group-text" data-mdb-ripple-init>
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </form>
                <div class="prompts__data">
                    <h3 class="prompts__sub-title text-center mt-5">Latest prompts sorted by: <span
                            class="prompts__tag">All</span></h3>
                    <ul class="prompts__list mt-5">
                        {{-- <li class="prompts__item card" id="0">
                            <div class="card-body">
                                <h5 class="prompts__item-author card-title">By: <span>bogsvity777</span></h5>
                                <p class="prompts__item-text card-text">Imagine you're tasked with redesigning a website for
                                    a local bakery. The bakery wants a fresh look
                                    that reflects their artisanal approach to baking and highlights their specialty
                                    products. How would you approach this project? Consider factors like user experience,
                                    visual design elements, navigation structure, and any unique features you might
                                    incorporate
                                    to make the website stand out in the competitive bakery market.</p>
                                <span class="prompts__item-date">2024, 01 March</span>
                            </div>
                        </li> --}}
                        @foreach ($prompts as $prompt)
                            <a class="prompts__item card" id="{{ $prompt->id }}"
                                href="{{ route('prompts.show', $prompt) }}">
                                <div class="card-body">
                                    <h5 class="prompts__item-author card-title">By:
                                        <span>{{ optional($prompt->user)->name }}</span>
                                    </h5>
                                    <p class="prompts__item-text card-text">{{ $prompt->prompt_content }}</p>
                                    <span class="prompts__item-date">{{ $prompt->created_at->format('Y, d F') }}</span>
                                </div>
                            </a>
                        @endforeach
                    </ul>
                    {{ $prompts->links() }}
                </div>
            </div>
        </div>
    </section>
@endsection
