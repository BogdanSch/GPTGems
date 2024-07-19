import React from "react";
import { router, usePage } from "@inertiajs/react";

export default function LikePromptButton({ prompt }) {
    const { auth, csrf } = usePage().props;
    const user = auth.user;

    const promptLikeAction = prompt["is_liked_by_user"]
        ? route("prompts.unlike", { prompt: prompt })
        : route("prompts.like", { prompt: prompt });

    const handleLike = (event) => {
        event.preventDefault();
        router.post(promptLikeAction);
    };

    return (
        user && (
            <form onSubmit={handleLike}>
                <button type="submit" className="prompts__item-like card p-1">
                    <svg>
                        <use
                            xlinkHref={
                                prompt["is_liked_by_user"]
                                    ? "#heartFill"
                                    : "#heart"
                            }
                        ></use>
                    </svg>
                </button>
            </form>
        )
    );
}
