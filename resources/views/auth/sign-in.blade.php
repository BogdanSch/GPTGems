@extends('layouts.layout')

@section('title', 'Login')

@section('main_content')
    <section class="sign-in">
        <div class="container">
            <div class="sign-in__wrap">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="card-title">Login</h1>
                        </div>
                        <div class="card-body">
                            @if (Session::has('error'))
                                <div class="alert alert-danger" role="alert">
                                    {{ Session::get('error') }}
                                </div>
                            @endif
                            <form action="{{ route('sign-in') }}" method="post">
                                @csrf
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" name="email" class="form-control" id="email"
                                        placeholder="name@example.com" required>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control" id="password" required>
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
        </div>
    </section>
@endsection
