@extends('layouts.layout')

@section('title', 'Login')

@section('main_content')
    <section class="sign-in">
        <div class="container">
            <div class="sign-in__wrap">
                <div class="card p-2">
                    <div class="card-body">
                        @if (Session::has('error'))
                            <div class="alert alert-danger" role="alert">
                                {{ Session::get('error') }}
                            </div>
                        @endif
                        <div class="text-content-full text-center mb-4">
                            <h2 class="sign-in__title card-title text-center mb-2">Login</h2>
                            <p class="sign-in__hint">New to GPTGems? <a href="{{ route('sign-up') }}">Sign up for a free
                                    account</a></p>
                        </div>
                        <form action="{{ route('sign-in') }}" method="post">
                            @csrf
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address: </label>
                                <input type="email" name="email" class="form-control" id="email"
                                    placeholder="name@example.com" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password: </label>
                                <input type="password" name="password" class="form-control" id="password"
                                    placeholder="password123" required>
                            </div>
                            <div class="mb-3">
                                <div class="d-grid">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
