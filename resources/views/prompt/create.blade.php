@extends('layouts.layout')

@section('title', 'Create A New Prompt')

@section('main_content')
    <section class="prompts" id="prompts">
        <div class="container">
            <div class="prompts__wrap">
                <h2 class="prompts__title text-center">Let's create <span class="mark">a new prompt together!</span></h2>
                <form class="prompts__form mt-5" action="{{ route('prompts.store') }}" method="post">
                    @csrf
                    <div class="mb-3">
                        <label for="promptTitle" class="form-label">Enter your prompt title:</label>
                        <input type="text" class="form-control" id="promptTitle" name="prompt_title"
                            placeholder="Your prompt title: " />
                    </div>
                    <div class="mb-3">
                        <label for="promptContent" class="form-label">Enter your prompt content:</label>
                        <textarea class="form-control" rows="10" id="promptContent" name="prompt_content"
                            placeholder="Your prompt content: "></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection
