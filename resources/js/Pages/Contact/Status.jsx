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
                    {contactStatus.toLowerCase() === "success" ? (
                        <div
                            className="contact-message card px-5 py-4"
                            key={`successMessage`}
                        >
                            <div className="text-content text-center full">
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
                                src={"/images/icons/status/confirm-icon.svg"}
                                alt="Email Confirmation Arrow"
                            />
                            <Link
                                className="btn btn-outline-primary"
                                href={route("home")}
                            >
                                Go Back
                            </Link>
                        </div>
                    ) : (
                        <div className="popup error card" key={`errorMessage`}>
                            <div className="text-content text-center full">
                                <h2 className="popup__title">Error message</h2>
                                <p className="popup__description">
                                    Your request wasn’t sent. Please, try again
                                    later!
                                </p>
                            </div>
                            <Image
                                className="popup__image"
                                src={"/images/icons/status/error-icon.svg"}
                                alt="Email Sending Error Cross"
                            />
                            <Link
                                className="btn btn-outline-primary"
                                href={route("home")}
                            >
                                Go Back
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
