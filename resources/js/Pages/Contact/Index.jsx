import React from "react";
import { Head, useForm } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/Inputs/TextInput";
import InputLabel from "@/Components/Inputs/InputLabel";
import InputError from "@/Components/Inputs/InputError";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

const Contact = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleEmailSubmition = (event) => {
        event.preventDefault();
        post(route("contact.sendMail"));
    };

    return (
        <>
            <Head title="Contact Center" />
            <Authenticated>
                <section
                    className="contact background-decoration-reverse"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="container">
                        <div className="contact__wrap">
                            <div className="contact-card card px-5 py-4">
                                <div className="card-body">
                                    <h1 className="contact__title text-center">
                                        Any questions?{" "}
                                        <span className="mark">
                                            Well, let's get in touch👋
                                        </span>
                                    </h1>
                                    <form
                                        onSubmit={handleEmailSubmition}
                                        className="mt-5"
                                        acceptCharset="UTF-8"
                                    >
                                        <div className="row mb-3">
                                            <div
                                                className="col-12 col-sm-6"
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease"
                                                data-aos-delay="1000"
                                            >
                                                <InputLabel htmlFor="userFullName">
                                                    Your full name*
                                                </InputLabel>
                                                <TextInput
                                                    type="text"
                                                    id="userFullName"
                                                    name="fullName"
                                                    value={data.fullName}
                                                    placeholder="John Doe"
                                                    onChange={(event) =>
                                                        setData(
                                                            "fullName",
                                                            event.target.value
                                                        )
                                                    }
                                                    autoComplete="name"
                                                />
                                                <InputError
                                                    message={errors.fullName}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div
                                                className="col-12 col-sm-6"
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease"
                                                data-aos-delay="1000"
                                            >
                                                <InputLabel htmlFor="userEmail">
                                                    Your email address*
                                                </InputLabel>
                                                <TextInput
                                                    type="email"
                                                    id="userEmail"
                                                    name="email"
                                                    value={data.email}
                                                    placeholder="name@example.com"
                                                    onChange={(event) =>
                                                        setData(
                                                            "email",
                                                            event.target.value
                                                        )
                                                    }
                                                    autoComplete="email"
                                                />
                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease"
                                            data-aos-delay="1000"
                                        >
                                            <InputLabel htmlFor="userSubject">
                                                Your Message Subject*
                                            </InputLabel>
                                            <TextInput
                                                type="text"
                                                id="userSubject"
                                                name="subject"
                                                value={data.subject}
                                                placeholder="Subject of your message"
                                                onChange={(event) =>
                                                    setData(
                                                        "subject",
                                                        event.target.value
                                                    )
                                                }
                                                autoComplete="off"
                                            />
                                            <InputError
                                                message={errors.subject}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div
                                            className="mb-3"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease"
                                            data-aos-delay="1000"
                                        >
                                            <InputLabel htmlFor="userMessage">
                                                Your Message*
                                            </InputLabel>
                                            <textarea
                                                className="form-control"
                                                type="text"
                                                id="userMessage"
                                                name="message"
                                                rows="5"
                                                value={data.message}
                                                placeholder="Type your message here..."
                                                onChange={(event) =>
                                                    setData(
                                                        "message",
                                                        event.target.value
                                                    )
                                                }
                                                autoComplete="off"
                                            />
                                            <InputError
                                                message={errors.message}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div
                                                id="emailHelp"
                                                className="form-text"
                                            >
                                                All the fields marked with *
                                                are required to be filled in.
                                            </div>
                                        </div>
                                        <PrimaryButton
                                            type="submit"
                                            isOutline={false}
                                            disabled={processing}
                                        >
                                            Submit
                                            <svg className="btn-svg">
                                                <use xlinkHref="#boxArrowUpRight"></use>
                                            </svg>
                                        </PrimaryButton>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="map background-decoration"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="container-fluid">
                        <div className="map__wrap">
                            <div className="text-content text-center">
                                <h2 className="map__title">
                                    My Personal Location, Khrakiv Ukraine
                                </h2>
                                <p className="map__description">
                                    Discover where I’m based, and feel free to
                                    connect with me in person. Here’s my
                                    location on the map for easy reference and
                                    availability.
                                </p>
                            </div>
                            <iframe
                                className="map__iframe mt-4"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.8166862806947!2d36.228490784903606!3d50.01479100800552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1243f9e69d1%3A0x6daed05394f03251!2z0KXQsNGA0LrRltCy0YHRjNC60LjQuSDQvdCw0YbRltC-0L3QsNC70YzQvdC40Lkg0YPQvdGW0LLQtdGA0YHQuNGC0LXRgiDRgNCw0LTRltC-0LXQu9C10LrRgtGA0L7QvdGW0LrQuA!5e0!3m2!1suk!2sua!4v1723660574020!5m2!1suk!2sua"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </Authenticated>
        </>
    );
};

export default Contact;
