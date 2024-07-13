import React from "react";
import { usePage, Link, Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import PromptsList from "@/Components/Prompts/PromptsList";

export default function Home({
    prompts,
    showPromptPagination,
    search,
    csrfToken,
}) {
    return (
        <>
            <Head title="Home" />
            <Authenticated>
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
                                    <span className="mark">
                                        AI-Powered Prompts
                                    </span>
                                </h1>
                                <p className="about__description">
                                    Welcome to GPTGems! We're an open-source
                                    platform using AI to spark creativity and
                                    meaningful conversations. Join us to explore
                                    engaging prompts, practice communication
                                    skills, and connect with others!
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
                                    <span className="prompts__tag">
                                        {search}
                                    </span>
                                </h3>
                                <PromptsList
                                    prompts={prompts}
                                    showPromptPagination={showPromptPagination}
                                    search={search}
                                    csrfToken={csrfToken}
                                />
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
            </Authenticated>
        </>
    );
}
