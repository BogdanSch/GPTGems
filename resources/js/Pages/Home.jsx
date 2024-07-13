import React from "react";
import { usePage } from "@inertiajs/react";
import { Link, Head } from "@inertiajs/react";

export default function Home() {
    const { prompts, canLogin, canRegister } = usePage().props;
    return (
        <>
            <Head title="Home" />
            <section className="about">
                <div className="container">
                    <div className="about__wrap">
                        <img
                            src="/dist/images/kyiv-view.jpg"
                            className="about__image"
                            alt="About Intro Image"
                        />
                        <div className="text-content text-center">
                            <h1 className="about__title">
                                Discover & Share
                                <span className="mark">AI-Powered Prompts</span>
                            </h1>
                            <p className="about__description">
                                Welcome to GPTGems! We're an open-source
                                platform using AI to spark creativity and
                                meaningful conversations. Join us to explore
                                engaging prompts, practice communication skills,
                                and connect with others!
                            </p>
                            <a
                                className="btn btn-outline-primary"
                                href="#prompts"
                            >
                                Discover the latest prompts!
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="prompts" id="prompts">
                <div className="container">
                    <div className="prompts__wrap">
                        <h2 className="prompts__title text-center">
                            Discover all the latest prompts
                        </h2>
                        <div className="prompts__data">
                            <h3 className="prompts__sub-title text-center mt-5">
                                Latest prompts sorted by:{" "}
                                <span className="prompts__tag">All</span>
                            </h3>
                            <ul className="prompts__list mt-5">
                                {prompts.data.map((prompt) => (
                                    <li
                                        key={prompt.id}
                                        className="prompts__item card"
                                    >
                                        <div className="card-body">
                                            <h4 className="prompts__item-title card-title mb-4">
                                                {prompt.prompt_title}
                                            </h4>
                                            <div className="prompts__item-group mb-3">
                                                <h5 className="prompts__item-author">
                                                    By:
                                                    <span>
                                                        {prompt.user?.name ||
                                                            "Unknown"}
                                                    </span>
                                                </h5>
                                            </div>
                                            <p className="prompts__item-text card-text">
                                                {prompt.prompt_content}
                                            </p>
                                            <span className="prompts__item-date">
                                                {new Date(
                                                    prompt.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="prompts__buttons text-center mt-5 mb-5">
                                <a
                                    className="btn btn-outline-primary"
                                    href="/prompts"
                                >
                                    Check new prompts!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
