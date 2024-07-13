@extends('layouts.layout')

@section('title', 'Change Your Profile Picture')

@section('main_content')
    <section class="profile" id="profile">
        <div class="container">
            <div class="profile__wrap">
                <div class="profile__card card p-3">
                    @if ($user->profile_photo_path)
                        <div class="profile__image">
                            <img src="{{ asset($user->profile_photo_path) }}" alt="Profile Photo" />
                            <a class="profile__image-link" href="{{ route('profile.update') }}"></a>
                        </div>
                    @endif
                    <h2 class="prompts__title text-center mt-3">Change your <span class="secondary">profile picture</span>
                    </h2>
                    <form action="{{ route('profile.update') }}" class="profile__form" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="form-group mb-3">
                            <label for="profilePhoto">Upload your profile Photo: (jpeg, png, jpg, gif)*</label>
                            <input type="file" class="form-control mt-2" id="profilePhoto" name="profile_photo" required>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Upload Photo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
