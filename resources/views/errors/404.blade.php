@extends('layouts.layout')

@section('title', '404 Not Found')

@section('main_content')
    <section class="error-page">
        <div class="container">
            <div class="error-page__content text-center">
                <h1 class="error-page__title">404</h1>
                <p class="error-page__message">Oops! Page not found, try another request.</p>
                <a href="/" class="error-page__button btn btn-primary">Go to Homepage</a>
            </div>
        </div>
    </section>
@endsection
