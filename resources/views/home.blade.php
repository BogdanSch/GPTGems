@extends('layouts.layout')

@section('title', 'Home')

@section('main_content')
    <section class="about">
        <div class="container">
            <div class="about__wrap">
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
                        <li class="prompts__item card" id="0">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
@endsection
