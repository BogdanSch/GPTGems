import React from "react";
import { Head, usePage, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PromptsList from "@/Components/Prompts/PromptsList";
import Search from "@/Components/Search/Search";
import Image from "@/Components/Image";

export default function Dashboard({ prompts, likedPrompts, search }) {
    const { auth } = usePage().props;
    const userData = auth.user.data;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <section className="prompts" id="prompts">
                <div className="container">
                    <div className="prompts__wrap">
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
                        <h2 className="prompts__title text-center mt-3">
                            Welcome back, <span>{userData.name}!</span>
                        </h2>
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
                        <div className="prompts__liked">
                            <h2 className="prompts__title text-center mt-5">
                                <span>Liked</span> Prompts
                            </h2>
                            <PromptsList
                                prompts={likedPrompts}
                                search={search}
                                showPagination={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
