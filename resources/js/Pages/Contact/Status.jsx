import React from "react";
import { Link } from "@inertiajs/react";
import Image from "@/Components/Image";

export default function Status({ contactStatus }) {
    return (
        <section
            className="contact background-decoration-reverse"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="top-bottom"
        >
            <div className="container">
                <div className="contact__wrap">
                    (
                    {contactStatus === "success" ? (
                        <div className="popup success card">
                            <div className="text-content full">
                                <h2 className="popup__title">
                                    Confirmation message
                                </h2>
                                <p className="popup__description">
                                    Your request was successfully sent! We will
                                    get in touch with you as soon as possible.
                                </p>
                            </div>
                            <Image
                                className="popup__image"
                                src="{{ asset('img/confirm-icon.png') }}"
                                alt="Email Confirmation"
                            />
                            <Link
                                className="btn btn--more"
                                href={route("home")}
                            >
                                Go Back
                            </Link>
                        </div>
                    ) : (
                        <div className="popup error card">
                            <div className="text-content full">
                                <h2 className="popup__title">Error message</h2>
                                <p className="popup__description">
                                    Your request wasn’t sent. Please, try again
                                    later!
                                </p>
                            </div>
                            <Image
                                className="popup__image"
                                src="{{ asset('img/error-icon.png') }}"
                                alt="Email Sending Error"
                            />
                            <Link
                                className="btn btn--more"
                                href={route("home")}
                            >
                                Go Back
                            </Link>
                        </div>
                    )}
                    )
                </div>
            </div>
        </section>
    );
}
