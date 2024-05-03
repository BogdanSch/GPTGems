@extends('layouts.layout')

@section('title', 'Sign-Up')

@section('main_content')
    <section class="sign-up">
        <div class="container">
            <div class="sign-up__wrap">
                <div class="card p-2">
                    <div class="card-body">
                        @if (Session::has('success'))
                            <div class="alert alert-success" role="alert">
                                {{ Session::get('success') }}
                            </div>
                        @endif
                        <div class="text-content-full text-center mb-4">
                            <h2 class="sign-up__title card-title text-center mb-2">Register</h2>
                            <p class="sign-up__hint">Already have an account? <a href="{{ route('sign-in') }}">Sign in
                                    now</a></p>
                        </div>
                        <form action="{{ route('sign-up') }}" method="post">
                            @csrf
                            <div class="mb-3">
                                <label for="name" class="form-label">Name:</label>
                                <input type="text" name="name" class="form-control" id="name"
                                    placeholder="John Doe" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address:</label>
                                <input type="email" name="email" class="form-control" id="email"
                                    placeholder="name@example.com" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password:</label>
                                <input type="password" name="password" class="form-control" id="password"
                                    placeholder="password123" required>
                            </div>
                            <div class="mb-3">
                                <div class="d-grid">
                                    <button class="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
