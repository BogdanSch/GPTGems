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
                        <button class="prompts__item-copy card p-1">
                            <svg>
                                <use xlink:href='#clipboard'></use>
                            </svg>
                        </button>
                    </div>
                    <p class="prompts__item-text card-text">{{ $prompt->prompt_content }}</p>
                    <span class="prompts__item-date">{{ $prompt->created_at->format('Y, d F') }}</span>
                </div>
            </a>
        @endforeach
    </ul>
@else
    <p class="text-center">No prompts found.</p>
@endif
