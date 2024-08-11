import React from "react";
import { Head, usePage, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PromptsList from "@/Components/Prompts/PromptsList";
import Search from "@/Components/Search/Search";
import Image from "@/Components/Image";
import FlashMessage from "@/Components/FlashMessages/FlashMessage";

export default function Dashboard({ prompts, likedPrompts, search = "All" }) {
    const { auth } = usePage().props;
    const userData = auth.user.data;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <FlashMessage />
            <section
                className="profile"
                id="profile"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="profile__wrap">
                        {userData["profile_photo_path"] && (
                            <div className="profile__image">
                                <Image
                                    src={userData["profile_photo_path"]}
                                    alt="Profile Photo"
                                />
                                <Link
                                    className="profile__image-link"
                                    href={route("profile.edit")}
                                >
                                    Update your profile info
                                </Link>
                            </div>
                        )}
                        <div className="text-center mt-2">
                            <Link
                                className="btn btn-outline-primary"
                                href={route("profile.edit")}
                            >
                                Update your profile
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="prompts mt-0"
                id="prompts"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
            >
                <div className="container">
                    <div className="prompts__wrap">
                        <div className="prompts__created">
                            <div className="text-content text-center mt-5">
                                <h2 className="prompts__title mb-2">
                                    Welcome back, <span>{userData.name}!</span>
                                </h2>
                                <p className="prompts__description">
                                    Here are all the prompts you've created,
                                    showcasing your creativity and unique
                                    ideas.Revisit your past work, refine your
                                    prompts, and continue to inspire others with
                                    your originality.
                                </p>
                            </div>
                            <Search previousSearchTerm={search} />
                            <div className="prompts__data">
                                <h3 className="prompts__sub-title text-center mt-5">
                                    Your latest prompts sorted by:{" "}
                                    <span className="prompts__tag">
                                        {search ? search : "All"}
                                    </span>
                                </h3>
                                <PromptsList
                                    prompts={prompts}
                                    search={search}
                                    showPagination={true}
                                />
                            </div>
                        </div>
                        <div
                            className="prompts__liked"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="text-content text-center mt-5">
                                <h2 className="prompts__title mb-2">
                                    <span>Liked</span> Prompts
                                </h2>
                                <p className="prompts__description">
                                    Explore your most loved prompts. This
                                    section highlights the prompts that have
                                    captured your interest and received your
                                    appreciation. Revisit, reuse, and get
                                    inspired by the ideas that resonated with
                                    you the most.
                                </p>
                            </div>
                            <Search
                                previousSearchTerm={search}
                                searchLikedPrompts={true}
                            />
                            <div className="prompts__data">
                                <h3 className="prompts__sub-title text-center mt-5">
                                    Your latest liked prompts sorted by:{" "}
                                    <span className="prompts__tag">
                                        {search ? search : "All"}
                                    </span>
                                </h3>
                                <PromptsList
                                    prompts={likedPrompts}
                                    search={search}
                                    showPagination={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
