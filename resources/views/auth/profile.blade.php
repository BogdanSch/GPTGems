@extends('layouts.layout')

@section('title', 'Your Latest Prompts')

@section('main_content')
    <section class="prompts" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title text-center">Welcome back, <span>{{ $user }}!</span></h2>
                <div class="prompts__profile">
                    <form action="{{ route('profile.update') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="profile_photo">Profile Photo</label>
                            <input type="file" class="form-control-file" id="profile_photo" name="profile_photo">
                        </div>
                        <button type="submit" class="btn btn-primary">Upload Photo</button>
                    </form>
                    @if (Auth::user()->profile_photo_path)
                        <div class="mt-3">
                            <h5>Current Profile Photo:</h5>
                            <img src="{{ asset(Auth::user()->profile_photo_path) }}" alt="Profile Photo"
                                class="img-thumbnail" width="200">
                        </div>
                    @endif
                </div>
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
                    @include('prompt.partials.prompt-item-preview', [
                        'prompts' => $prompts,
                        'showPromptPagination' => true,
                    ])
                </div>
                <div class="prompts__liked">
                    <h2 class="text-center mt-5"><span>Liked</span> Prompts</h2>
                    @include('prompt.partials.prompt-item-preview', [
                        'prompts' => $likedPrompts,
                        'showPromptPagination' => true,
                    ]);
                </div>
            </div>
        </div>
    </section>
@endsection
