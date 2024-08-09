import React, { useEffect, useRef } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import useActiveLinks from "@/Hooks/useActiveLinks";
import DangerButton from "../Buttons/DangerButton";

export default function Header() {
    const { auth, csrf } = usePage().props;
    const user = auth.user;

    const headerRef = useRef(null);

    useEffect(() => {
        function applyStickyHeader() {
            if (window.scrollY > 0) {
                headerRef.current.classList.add("sticky");
            } else {
                if (headerRef.current.classList.contains("sticky")) {
                    headerRef.current.classList.remove("sticky");
                }
            }
        }

        applyStickyHeader();
        window.addEventListener("scroll", applyStickyHeader);
    }, []);

    useEffect(() => {
        const burger = document.querySelector(".header__burger");
        const menu = document.querySelector(".header__menu");
        const body = document.body;

        const toggleMenu = () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
            body.classList.toggle("lock");
        };

        burger.addEventListener("click", toggleMenu);

        return () => {
            burger.removeEventListener("click", toggleMenu);
        };
    }, []);

    useActiveLinks(".header__list .header__item a");

    const handleLogout = (event) => {
        event.preventDefault();
        router.post(
            route("logout"),
            {
                _token: csrf,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <header className="header" ref={headerRef}>
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
                                    <button
                                        type="button"
                                        className="btn btn-profile d-block link-body-emphasis text-decoration-none dropdown-toggle"
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
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("prompts.create")}
                                            >
                                                Create a new prompt
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("dashboard")}
                                            >
                                                My profile
                                            </Link>
                                        </li>
                                        <hr className="dropdown-divider" />
                                        <li>
                                            <form
                                                onSubmit={handleLogout}
                                                className="header__profile-form"
                                                role="logout"
                                            >
                                                <DangerButton
                                                    type="submit"
                                                    className="header__profile-signout"
                                                >
                                                    Sign out
                                                </DangerButton>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="btn btn-outline-light me-2"
                                    >
                                        Sign-in
                                    </Link>
                                    <Link
                                        href={route("register")}
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
