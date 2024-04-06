<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GPTGems UA - @yield('title')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="{{ asset('dist/styles/style.css') }}">
</head>

<body>
    <div class="wrapper" id="start">
        <header class="header">
            <div class="container">
                <div
                    class="header__wrap d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                    <div class="header__logo col-md-3 mb-2 mb-md-0">
                        <a href="/" class="link-body-emphasis text-decoration-none">
                            <svg>
                                <use xlink:href='#logoIcon'></use>
                            </svg>
                            GPTGems
                        </a>
                    </div>
                    <nav class="header__list nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" class="header__item nav-link px-2 active">Home</a></li>
                        <li><a href="/about" class="header__item nav-link px-2">About</a></li>
                        <li><a href="/prompts" class="header__item nav-link px-2">Prompts</a></li>
                        <li><a href="/contact-us" class="header__item nav-link px-2">Contact</a></li>
                    </nav>
                    <div class="header__menu col-md-3">
                        @auth
                            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                                    class="rounded-circle">
                            </a>
                            <ul class="dropdown-menu text-small">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
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
                    <p class="footer__copyright col-md-4 mb-0">© <?php echo (new DateTime())->format('Y'); ?> RoCreator, Inc</p>
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
                        <li class="footer__item"><a href="/about" class="footer__item nav-link px-2">About</a></li>
                        <li class="footer__item"><a href="/prompts" class="footer__item nav-link px-2">Prompts</a></li>
                        <li class="footer__item"><a href="/contact-us" class="footer__item nav-link px-2">Contact</a>
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
    </svg>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
    <script src="{{ asset('dist/scripts/lib/jquery-3.7.1.js') }}"></script>
    <script src="{{ asset('dist/scripts/header.js') }}"></script>
    <script src="{{ asset('dist/scripts/scroll-top.js') }}"></script>
</body>

</html>
