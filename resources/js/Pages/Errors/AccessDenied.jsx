import React from "react";
import { Head, Link } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function AccessDenied() {
    return (
        <Guest>
            <Head title="403 Access Denied" />
            <section
                className="error-page"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="error-page__content text-center">
                        <h1 className="error-page__title">403</h1>
                        <p className="error-page__message">
                            Access Forbidden! Sorry, but you can't access this
                            page.
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
