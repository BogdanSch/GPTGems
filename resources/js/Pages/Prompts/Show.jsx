import React from "react";
import { usePage, Head, Link, router } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import CopyPromptContentButton from "@/Components/Buttons/CopyPromptContentButton";
import LikePromptButton from "@/Components/Buttons/LikePromptButton";
import FlashMessage from "@/Components/FlashMessages/FlashMessage";

export default function Show({ prompt }) {
    const { auth, csrf } = usePage().props;
    const user = auth.user?.data;
    const promptData = prompt.data;

    const submitDelete = async (event) => {
        event.preventDefault();
        router.delete(
            route("prompts.destroy", { prompt: promptData }),
            {
                _token: csrf,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <>
            <Head
                title={`Prompt created by: ${promptData["prompt_author"].name}`}
            />
            <Authenticated>
                <FlashMessage />
                <section className="prompts mt-5 mb-5" id="prompts">
                    <div className="container">
                        <div className="prompts__wrap">
                            <h2 className="prompts__title mb-5">
                                Prompt created by:{" "}
                                {promptData["prompt_author"].name}
                            </h2>
                            <div className="prompts__data">
                                <div className="prompts__item-group">
                                    <h3 className="prompts__title">
                                        {prompt["prompt_title"]}
                                    </h3>
                                    <div className="prompts__item-elements">
                                        <CopyPromptContentButton
                                            prompt={prompt}
                                        />
                                        <LikePromptButton prompt={promptData} />
                                    </div>
                                </div>
                                <div className="prompts__content mb-4">
                                    <div className="prompts__content-like">
                                        <span>{promptData["likes_count"]}</span>
                                        <svg>
                                            <use
                                                xlinkHref={
                                                    user &&
                                                    promptData[
                                                        "is_liked_by_user"
                                                    ]
                                                        ? "#heartFill"
                                                        : "#heart"
                                                }
                                            ></use>
                                        </svg>
                                    </div>
                                    <div className="prompts__content-text">
                                        {promptData["prompt_content"]}
                                    </div>
                                </div>
                                <div className="prompts__date">
                                    {promptData["created_at"]}
                                </div>
                                {user &&
                                    user.id ===
                                        promptData["prompt_author"].id && (
                                        <div className="prompts__actions mt-5">
                                            <Link
                                                href={route("prompts.edit", {
                                                    prompt: promptData,
                                                })}
                                                className="prompts__button-edit btn btn-outline-primary"
                                            >
                                                Edit this prompt
                                            </Link>
                                            <form onSubmit={submitDelete}>
                                                <button
                                                    type="submit"
                                                    className="prompts__button-delete btn btn-danger"
                                                >
                                                    Delete this prompt
                                                </button>
                                            </form>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
