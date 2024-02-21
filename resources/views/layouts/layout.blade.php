<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GPTGems UA - @yield('title')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('styles/style.css') }}">
</head>

<body>
    <div class="wrapper">
        <header class="header">
            <div class="container">
                <div
                    class="header__wrap d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <div class="header__logo col-md-3 mb-2 mb-md-0">
                        <a href="/" class="link-body-emphasis text-decoration-none">
                            <img src="{{ asset('images/terminal-solid.svg') }}" alt="Site Logo">
                            GPTGems
                        </a>
                    </div>

                    <nav class="header__list nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" class="header__item nav-link px-2 active">Home</a></li>
                        <li><a href="/about" class="header__item nav-link px-2">About</a></li>
                        <li><a href="/prompts" class="header__item nav-link px-2">Prompts</a></li>
                        <li><a href="/contact-us" class="header__item nav-link px-2">Contact</a></li>
                    </nav>

                    <div class="header__menu col-md-3 text-end">
                        @auth
                        @else
                            <button type="button" class="btn btn-outline-light me-2">Login</button>
                            <button type="button" class="btn btn-light">Sign-up</button>
                        @endauth
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            @yield('main_content')
        </main>
        <footer class="footer">
            <div class="container">
                <div class="footer__wrap d-flex flex-wrap justify-content-between align-items-center py-3 mt-4">
                    <p class="footer__copyright col-md-4 mb-0">© <?php echo (new DateTime())->format("Y"); ?> RoCreator, Inc</p>
                    <div class="footer__socials col-md-4 d-flex flex-wrap justify-content-center">
                        Nothing yet...
                    </div>
                    <nav class="footer__list nav col-md-4 justify-content-end">
                        <li class="footer__item"><a href="/" class=" nav-link px-2 active">Home</a></li>
                        <li class="footer__item"><a href="/about" class="footer__item nav-link px-2">About</a></li>
                        <li class="footer__item"><a href="/prompts" class="footer__item nav-link px-2">Prompts</a></li>
                        <li class="footer__item"><a href="/contact-us" class="footer__item nav-link px-2">Contact</a></li>
                    </nav>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
</body>

</html>
