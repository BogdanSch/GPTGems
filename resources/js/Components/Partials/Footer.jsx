import React from "react";
import { Link } from "@inertiajs/react";
import useActiveLinks from "@/Hooks/useActiveLinks";

const Footer = () => {
    useActiveLinks(".footer__list .footer__item a");

    return (
        <footer className="footer mt-4">
            <div className="container">
                <div className="footer__wrap d-flex flex-wrap justify-content-between align-items-center py-4">
                    <p className="footer__copyright col-md-4 mb-0">
                        © {new Date().getFullYear()} RoCreator, Inc UA
                    </p>
                    <div className="footer__socials col-md-4">
                        <div className="footer__socials-item">
                            <a
                                href="https://t.me/+voC6fujFeLE4ZDQy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__socials-link"
                            >
                                <i className="bi bi-telegram"></i>
                            </a>
                        </div>
                        <div className="footer__socials-item">
                            <a
                                href="https://www.instagram.com/bohsvity_777/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__socials-link"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                        <div className="footer__socials-item">
                            <a
                                href="https://www.facebook.com/profile.php?id=100027446175865"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__socials-link"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className="footer__socials-item">
                            <a
                                href="https://github.com/BogdanSch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__socials-link"
                            >
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                    <nav className="footer__list nav col-md-4 justify-content-end">
                        <li className="footer__item">
                            <Link
                                href={route("home")}
                                className="nav-link px-2 active"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link
                                href={route("about")}
                                className="nav-link px-2"
                            >
                                About
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link
                                href={route("prompts.index")}
                                className="nav-link px-2"
                            >
                                Prompts
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link
                                href={route("contact")}
                                className="nav-link px-2"
                            >
                                Contact
                            </Link>
                        </li>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
