import React from "react";
import { Head, Link } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import ImagesSlider from "@/Components/Sliders/ImagesSlider";
import Image from "@/Components/Image";

const sliderImages = [
    "/images/slider-images/create.jpg",
    "/images/slider-images/edit.jpg",
    "/images/slider-images/share.jpg",
    "/images/slider-images/promote.jpg",
];

export default function About() {
    return (
        <>
            <Head title="Home" />
            <Authenticated>
                <section
                    className="about background-decoration"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000"
                >
                    <div className="container">
                        <div className="about__wrap">
                            <div className="text-content text-center">
                                <h1 className="about__title">About GPTGems</h1>
                                <p className="about__description">
                                    Unleashing the Power of AI-Powered Prompts
                                    for Creativity and Communication Harness the
                                    potential of AI-driven prompts to fuel
                                    creativity and enhance communication.
                                    Whether you’re crafting content, generating
                                    ideas, or engaging in conversations, our AI
                                    tools inspire and guide you. Transform your
                                    creative process with technology designed
                                    for your needs.
                                </p>
                            </div>
                            <ImagesSlider
                                className="mt-5"
                                images={sliderImages}
                                slidesPerView={3}
                                spaceBetweenSlides={40}
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>
                </section>
                <section
                    className="features background-decoration-reverse"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-offset="400"
                >
                    <div className="container">
                        <div className="features__wrap">
                            <div className="text-content text-center">
                                <h2 className="features__title">
                                    GPTGems with rich features
                                </h2>
                                <p className="features__description">
                                    Explore tools designed to help you craft,
                                    manage, and interact with prompts
                                    effortlessly.
                                </p>
                            </div>
                            <div className="features__list">
                                <div className="features__item card">
                                    <div className="features__item-icon">
                                        <svg>
                                            <use xlinkHref="#toolsIcon"></use>
                                        </svg>
                                    </div>
                                    <h4 className="features__item-title">
                                        Prompt Creation
                                    </h4>
                                    <p className="features__item-text">
                                        Create and share unique prompts in
                                        seconds.
                                    </p>
                                </div>
                                <div className="features__item card">
                                    <div className="features__item-icon">
                                        <svg>
                                            <use xlinkHref="#dashboardIcon"></use>
                                        </svg>
                                    </div>
                                    <h4 className="features__item-title">
                                        Personalized Dashboard
                                    </h4>
                                    <p className="features__item-text">
                                        Track your activity with a custom
                                        dashboard.
                                    </p>
                                </div>
                                <div className="features__item card">
                                    <div className="features__item-icon">
                                        <svg>
                                            <use xlinkHref="#commentsIcon"></use>
                                        </svg>
                                    </div>
                                    <h4 className="features__item-title">
                                        Interactive Community
                                    </h4>
                                    <p className="features__item-text">
                                        Connect with others and explore their
                                        prompts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="developer background-decoration"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    <div className="container">
                        <div className="developer__wrap">
                            <div className="text-content text-center mb-4">
                                <h2 className="developer__title">
                                    Meet the Developer
                                </h2>
                                <p className="developer__description">
                                    Discover the developer behind GPTGems, a
                                    passionate full-stack enthusiast dedicated
                                    to crafting innovative web solutions.
                                </p>
                            </div>
                            <div className="developer__list">
                                <div className="developer__item card px-4 py-5">
                                    Hi! I'm Bohdan Shcherbak, an admired
                                    full-stack web developer just getting
                                    started with building comprehensive web
                                    applications. I have a passion for creating
                                    engaging and user-friendly experiences that
                                    bring ideas to life.
                                </div>
                                <div className="developer__item card px-4 py-5">
                                    GPTGems is a project that combines my
                                    interests in AI, web development, and
                                    fostering creative communities. I’m excited
                                    to continue growing as a developer and to
                                    see how GPTGems evolves with input from its
                                    users.
                                </div>
                                <div className="developer__item card px-4 py-5">
                                    Feel free to reach out if you have any
                                    feedback, suggestions, or just want to
                                    connect!
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="mission background-decoration-reverse"
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                >
                    <div className="container">
                        <div className="mission__wrap">
                            <div className="mission__group">
                                <h2 className="mission__title">Our Mission</h2>
                                <p className="mission__description">
                                    At GPTGems, our mission is to empower
                                    individuals to explore their creativity,
                                    improve their communication skills, and
                                    connect with others through the power of AI.
                                    We believe in the potential of AI to inspire
                                    new ideas and foster meaningful
                                    conversations, and we’re committed to
                                    providing a platform that makes this
                                    possible.
                                </p>
                            </div>
                            <Image
                                className="mission__image"
                                src={"/images/Success_Icon.png"}
                                alt="Mission Is Success"
                            />
                        </div>
                    </div>
                </section>
                <section
                    className="prompts-action background-decoration"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                >
                    <div className="container">
                        <div className="prompts-action__wrap">
                            <Image
                                className="mission__image"
                                src={"/images/mountains-landscape.jpg"}
                                alt="Mission Is Success"
                            />
                            <div className="prompts-action__group">
                                <h2 className="prompts-action__title">
                                    Join the GPTGems Community
                                </h2>
                                <p className="prompts-action__description">
                                    Ready to dive in? Explore our latest prompts
                                    and unleash your creativity like never
                                    before. Whether you're a regular creator or
                                    just starting out, our carefully curated
                                    prompts are designed to embrayce your
                                    inspiration and creative. Start exploring
                                    today and see where your imagination can
                                    take you!
                                </p>
                                <Link
                                    href={route("prompts.index")}
                                    className="btn btn-primary"
                                >
                                    Discover the latest Prompts
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
