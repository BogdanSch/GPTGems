@if ($prompts->count() > 0)
    <ul class="prompts__list mt-5">
        @foreach ($prompts as $prompt)
            <a class="prompts__item card" id="{{ $prompt->id }}" href="{{ route('prompts.show', $prompt) }}">
                <div class="card-body">
                    <h4 class="prompts__item-title card-title mb-4">{{ $prompt->prompt_title }}</h4>
                    <div class="prompts__item-group mb-3">
                        <h5 class="prompts__item-author">By:
                            <span>{{ optional($prompt->user)->name }}</span>
                        </h5>
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
                    <p class="prompts__item-text card-text">{{ $prompt->prompt_content }}</p>
                    <span class="prompts__item-date">{{ $prompt->created_at->format('Y, d F') }}</span>
                </div>
            </a>
        @endforeach
    </ul>
    @if ($showPromptPagination)
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
    @endif
@else
    <p class="text-center">No prompts found.</p>
@endif
