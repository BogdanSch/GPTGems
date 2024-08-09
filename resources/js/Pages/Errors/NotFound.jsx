import React from "react";
import { Head, Link } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function NotFound() {
    return (
        <Guest>
            <Head title="404 Not Found" />
            <section
                className="error-page"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="error-page__content text-center">
                        <h1 className="error-page__title">404</h1>
                        <p className="error-page__message">
                            Oops! Page not found, try another request.
                        </p>
                        <Link
                            href={route("home")}
                            className="error-page__button btn btn-primary"
                        >
                            Go to the Homepage
                        </Link>
                    </div>
                </div>
            </section>
        </Guest>
    );
}
