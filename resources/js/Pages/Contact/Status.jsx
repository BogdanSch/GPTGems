import React from "react";
import { Head, Link } from "@inertiajs/react";
import Image from "@/Components/Image";
import Guest from "@/Layouts/GuestLayout";

export default function Status({ contactStatus }) {
    return (
        <>
            <Head title="Contact Submition Status" />
            <Guest>
                <section
                    className="contact"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="container">
                        <div className="contact__wrap">
                            {contactStatus.toLowerCase() === "success" ? (
                                <div
                                    className="contact-message card px-1 py-4"
                                    key={`successMessage`}
                                >
                                    <div className="text-content text-center full mb-2">
                                        <h2 className="contact-message__title">
                                            Confirmation message
                                        </h2>
                                        <p className="contact-message__description">
                                            Your request was successfully sent!
                                            We will get in touch with you as
                                            soon as possible.
                                        </p>
                                    </div>
                                    <Image
                                        className="contact-message__image"
                                        src={
                                            "/images/icons/status/confirm-icon.svg"
                                        }
                                        alt="Email Confirmation Arrow"
                                    />
                                    <div className="text-center mt-4">
                                        <Link
                                            className="btn btn-outline-primary"
                                            href={route("home")}
                                        >
                                            Go Back
                                            <svg className="btn-outline-svg">
                                                <use xlinkHref="#arrowRight"></use>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="contact-message card px-1 py-4"
                                    key={`errorMessage`}
                                >
                                    <div className="text-content text-center full mb-2">
                                        <h2 className="contact-message__title">
                                            Error message
                                        </h2>
                                        <p className="contact-message__description">
                                            Your request wasn’t sent. Please,
                                            try again later!
                                        </p>
                                    </div>
                                    <Image
                                        className="contact-message__image"
                                        src={
                                            "/images/icons/status/error-icon.svg"
                                        }
                                        alt="Email Sending Error Cross"
                                    />
                                    <div className="text-center mt-4">
                                        <Link
                                            className="btn btn-outline-primary"
                                            href={route("home")}
                                        >
                                            Go Back
                                            <svg className="btn-outline-svg">
                                                <use xlinkHref="#arrowRight"></use>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </Guest>
        </>
    );
}
