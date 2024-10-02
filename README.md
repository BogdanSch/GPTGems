## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

# About GPTGems

GPTGems implements a custom authentication system using Laravel, GitHub, and Google OAuth for user login. Users can sign in with their GitHub or Google accounts to access the application. It also includes a well-structured front-end utilizing React.

## Features

-   Custom authentication with GitHub and Google.
-   OAuth integration for secure third-party logins.
-   Modular React components for better maintainability.
-   Styled error messages for improved UX.

## Prerequisites

Before running the project, ensure you have the following installed:

-   PHP 8.2
-   Composer
-   Laravel 10
-   MySQL
-   Node.js & npm

## Running the Project

1. Clone the repository:
   `   git clone https://github.com/your-username/your-repo.git
Navigate into the project directory:` > cd your-repo

> Install the necessary PHP dependencies using Composer:

-   composer install

> Install JavaScript dependencies:

-   npm install

> Copy the .env.example file to .env and configure the following:
> Database credentials (DB_DATABASE, DB_USERNAME, DB_PASSWORD)
> GitHub OAuth keys: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
> Google OAuth keys: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

cp .env.example .env

> Generate an application key:

-   php artisan key:generate
    > Run the migrations to set up the database:
-   php artisan migrate
    > Serve the project locally:
-   php artisan serve
    > For front-end development, run:
-   npm run dev

> Open your browser and go to:

-   http://localhost:8000
    > OAuth Configuration
    > -GitHub
    > -Go to GitHub Developer Settings.
    > -Create a new OAuth application and set the callback URL:
    > -http://localhost:8000/auth/github/callback
    > -Add the Client ID and Client Secret to your .env file.
    > -Google
    > -Go to Google Cloud Console.
    > -Create a new project and enable the OAuth consent screen.
    > -Set the callback URL:
    > -http://localhost:8000/auth/google/callback
    > -Add the Client ID and Client Secret to your .env file.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
