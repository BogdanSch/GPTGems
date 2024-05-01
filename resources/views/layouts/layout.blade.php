<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GPTGems UA - @yield('title')</title>
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('dist/images/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('dist/images/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('dist/images/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('dist/images/favicon/site.webmanifest') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="{{ asset('dist/styles/style.css') }}">
</head>

<body>
    <div class="wrapper" id="start">
        <header class="header">
            <div class="container">
                <div class="header__wrap">
                    <div class="header__logo col-md-3 mb-2 mb-md-0">
                        <a href="/" class="link-body-emphasis text-decoration-none">
                            <svg>
                                <use xlink:href='#logoIcon'></use>
                            </svg>
                            GPTGems
                        </a>
                    </div>
                    <div class="header__burger">
                        <span></span>
                    </div>
                    <div class="header__menu">
                        <nav class="header__list nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li class="header__item"><a href="/" class="nav-link px-2 active">Home</a></li>
                            <li class="header__item"><a href="{{ route('about') }}" class="nav-link px-2">About</a></li>
                            <li class="header__item"><a href="{{ route('prompts.index') }}"
                                    class="nav-link px-2">Prompts</a>
                            </li>
                            <li class="header__item"><a href="{{ route('contact') }}" class="nav-link px-2">Contact</a>
                            </li>
                        </nav>
                        <div class="profile">
                            @auth
                                <a href="{{ route('prompts.index') }}"
                                    class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg class="profile__svg" width="32" height="32">
                                        <use xlink:href='#userProfile'></use>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu text-small">
                                    <li><a class="dropdown-item" href="{{ route('prompt.create') }}">New prompt</a></li>
                                    <li><a class="dropdown-item" href="{{ route('profile') }}">Check my prompts</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li>
                                        <form action="{{ route('logout') }}" class="profile__form"
                                            method="post"role="search">
                                            @csrf
                                            @method('DELETE')
                                            <button class="btn btn-danger profile__form-signout"
                                                type="submit">Sign out</button>
                                        </form>
                                    </li>
                                </ul>
                            @else
                                <a class="btn btn-outline-light me-2" href="{{ route('sign-in') }}">Sign-in</a>
                                <a class="btn btn-light" href="{{ route('sign-up') }}">Sign-up</a>
                            @endauth
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            @session('message')
                <div class="message">
                    <div class="container">
                        <div class="message__wrap">
                            <div class="alert alert-success mt-2" role="alert">
                                {{ session('message') }}
                            </div>
                        </div>
                    </div>
                </div>
            @endsession
            @yield('main_content')
        </main>
        <footer class="footer mt-4">
            <div class="container">
                <div class="footer__wrap d-flex flex-wrap justify-content-between align-items-center py-4">
                    <p class="footer__copyright col-md-4 mb-0">© <?php echo (new DateTime())->format('Y'); ?> RoCreator, Inc UA</p>
                    <div class="footer__socials col-md-4">
                        <div class="footer__socials-item">
                            <a href="https://t.me/+voC6fujFeLE4ZDQy" target="_blank" class="footer__socials-link">
                                <i class="bi bi-telegram"></i></a>
                        </div>
                        <div class="footer__socials-item">
                            <a href="https://www.instagram.com/bohsvity_777/" target="_blank"
                                class="footer__socials-link">
                                <i class="bi bi-instagram"></i></a>
                        </div>
                        <div class="footer__socials-item">
                            <a href="https://www.facebook.com/profile.php?id=100027446175865" target="_blank"
                                class="footer__socials-link">
                                <i class="bi bi-facebook"></i></a>
                        </div>
                        <div class="footer__socials-item">
                            <a href="https://github.com/BogdanSch" target="_blank" class="footer__socials-link">
                                <i class="bi bi-github"></i></a>
                        </div>
                    </div>
                    <nav class="footer__list nav col-md-4 justify-content-end">
                        <li class="footer__item"><a href="/" class="footer__item nav-link px-2 active">Home</a>
                        </li>
                        <li class="footer__item"><a href="{{ route('about') }}"
                                class="footer__item nav-link px-2">About</a></li>
                        <li class="footer__item"><a href="{{ route('prompts.index') }}"
                                class="footer__item nav-link px-2">Prompts</a>
                        </li>
                        <li class="footer__item"><a href="{{ route('contact') }}"
                                class="footer__item nav-link px-2">Contact</a>
                        </li>
                    </nav>
                </div>
            </div>
        </footer>
        <a class="scroll-top" href="#start">
            <svg class="scroll-top__svg">
                <use xlink:href='#arrowTop'></use>
            </svg>
        </a>
    </div>
    <svg style="display: none;">
        <symbol id="logoIcon" viewBox="0 0 576 512">
            <g>
                <path
                    d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </g>
        </symbol>
        <symbol id="arrowTop" viewBox="0 0 384 512">
            <g>
                <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </g>
        </symbol>
        <symbol id="userProfile" viewBox="0 0 16 16">
            <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            <path
                d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
        </symbol>
    </svg>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
    <script src="{{ asset('dist/scripts/lib/jquery-3.7.1.js') }}"></script>
    <script src="{{ asset('dist/scripts/header.js') }}"></script>
    <script src="{{ asset('dist/scripts/scroll-top.js') }}"></script>
</body>

</html>
