@extends('layouts.layout')

@section('title', '403 Access Denied')

@section('main_content')
    <section class="error-page">
        <div class="container">
            <div class="error-page__content text-center">
                <h1 class="error-page__title">403</h1>
                <p class="error-page__message">Access Forbidden! Sorry, but you can't access this page.</p>
                <a href="/" class="error-page__button btn btn-primary">Go to Homepage</a>
            </div>
        </div>
    </section>
@endsection
