@extends('layouts.layout')

@section('title', 'Your Latest Prompts')

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
                    @include('prompt.partials.prompt-item-preview', ['prompts' => $prompts])
                </div>
            </div>
        </div>
    </section>
@endsection
