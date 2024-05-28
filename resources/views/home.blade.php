@extends('layouts.layout')

@section('title', 'Home')

@section('main_content')
    <section class="about">
        <div class="container">
            <div class="about__wrap">
                <img src="{{ asset('dist/images/kyiv-view.jpg') }}" class="about__image" alt="About Intro Image">
                <div class="text-content text-center">
                    <h1 class="about__title">Discover & Share <span class="mark">AI-Powered Prompts</span></h1>
                    <p class="about__description">Welcome to GPTGems! We're an open-source platform using AI to spark
                        creativity and meaningful conversations. Join us to explore engaging prompts, practice communication
                        skills, and connect with others!</p>
                    <a class="btn btn-outline-primary" href="#prompts">Discover the latest prompts!</a>
                </div>
            </div>
        </div>
    </section>
    <section class="prompts" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title text-center">Discover all the latest prompts</h2>
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
                    <h3 class="prompts__sub-title text-center mt-5">Latest prompts sorted by: <span
                            class="prompts__tag">{{ isset($search) ? $search : 'All' }}</span></h3>
                    @include('prompt.partials.prompt-item-preview', ['prompts' => $prompts])
                    <div class="prompts__buttons text-center mt-5 mb-5">
                        <a class="btn btn-outline-primary" href="{{ route('prompts.index') }}">Check new prompts!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
