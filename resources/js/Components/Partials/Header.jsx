import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const { user } = usePage().props;

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo col-md-3 mb-2 mb-md-0">
                        <Link
                            href={route("home")}
                            className="link-body-emphasis text-decoration-none"
                        >
                            <svg>
                                <use xlinkHref="#logoIcon"></use>
                            </svg>
                            GPTGems
                        </Link>
                    </div>
                    <div className="header__burger">
                        <span></span>
                    </div>
                    <div className="header__menu">
                        <nav className="header__list nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li className="header__item">
                                <Link
                                    href={route("home")}
                                    className="nav-link px-2 active"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link
                                    href={route("about")}
                                    className="nav-link px-2"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link
                                    href={route("prompts.index")}
                                    className="nav-link px-2"
                                >
                                    Prompts
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link
                                    href={route("contact")}
                                    className="nav-link px-2"
                                >
                                    Contact
                                </Link>
                            </li>
                        </nav>
                        <div className="header__profile">
                            {user ? (
                                <div className="dropdown">
                                    <Link
                                        href={route("prompts.index")}
                                        className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            className="header__profile-svg"
                                            width="32"
                                            height="32"
                                        >
                                            <use xlinkHref="#userProfile"></use>
                                        </svg>
                                    </Link>
                                    <ul className="dropdown-menu text-small">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("prompt.create")}
                                            >
                                                Create a new prompt
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("profile.index")}
                                            >
                                                My profile
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <form
                                                action={route("logout")}
                                                className="header__profile-form"
                                                method="post"
                                                role="search"
                                            >
                                                @csrf @method('DELETE')
                                                <button
                                                    className="btn btn-danger header__profile-signout"
                                                    type="submit"
                                                >
                                                    Sign out
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href={route("sign-in")}
                                        className="btn btn-outline-light me-2"
                                    >
                                        Sign-in
                                    </Link>
                                    <Link
                                        href={route("sign-up")}
                                        className="btn btn-light"
                                    >
                                        Sign-up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
