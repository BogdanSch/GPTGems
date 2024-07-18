import React from "react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function LikePromptButton({ prompt }) {
    const { auth, csrf } = usePage().props;
    const user = auth.user;

    const promptLikeAction = prompt["is_liked_by_user"]
        ? route("prompts.unlike", { prompt })
        : route("prompts.like", { prompt });

    const handleLike = async (event) => {
        event.preventDefault();
        await fetch(promptLikeAction, {
            method: "POST",
            headers: {
                "X-CSRF-Token": csrf,
                "Content-Type": "application/json",
            },
        });
        Inertia.reload();   
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
