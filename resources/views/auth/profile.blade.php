@extends('layouts.layout')

@section('title', 'Latest Prompts')

@section('main_content')
    <section class="prompts" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title text-center">Welcome back, <span>{{ $user }}!</span></h2>
                <form class="prompts__form mt-5" action="{{ route('prompts.search') }}" method="get">
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
                    <h3 class="prompts__sub-title text-center mt-5">Your latest prompts sorted by: <span
                            class="prompts__tag">{{ isset($search) ? $search : 'All' }}</span></h3>
                    @if ($prompts->count() > 0)
                        <ul class="prompts__list mt-5">
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
                        <div class="prompts__pagination mt-5">
                            @if ($prompts->previousPageUrl())
                                <a href="{{ $prompts->previousPageUrl() }}{{ isset($search) ? '&search=' . urlencode($search) : '' }}&_token={{ csrf_token() }}"
                                    class="btn btn-outline-pagination">Previous</a>
                            @endif

                            @for ($i = 1; $i <= $prompts->lastPage(); $i++)
                                <a href="{{ $prompts->url($i) }}{{ isset($search) ? '&search=' . urlencode($search) : '' }}&_token={{ csrf_token() }}"
                                    class="pagination__link {{ $prompts->currentPage() == $i ? 'active' : '' }}">{{ $i }}</a>
                            @endfor

                            @if ($prompts->nextPageUrl())
                                <a href="{{ $prompts->nextPageUrl() }}{{ isset($search) ? '&search=' . urlencode($search) : '' }}&_token={{ csrf_token() }}"
                                    class="btn btn-outline-pagination">Next</a>
                            @endif
                        </div>
                    @else
                        <p class="text-center">No prompts found.</p>
                    @endif
                </div>
            </div>
        </div>
    </section>
@endsection
