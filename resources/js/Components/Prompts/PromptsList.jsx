import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function PromptsList({ prompts, search }) {
    const { auth, csrf } = usePage().props;
    const promptsData = prompts.data;
    console.log(promptsData);

    return (
        <>
            {promptsData.length > 0 ? (
                <ul className="prompts__list mt-5">
                    {promptsData.map((prompt) => (
                        <Link
                            key={prompt.id}
                            className="prompts__item card"
                            href={route("prompts.show", { prompt })}
                        >
                            <div className="card-body">
                                <h4 className="prompts__item-title card-title mb-4">
                                    {prompt["prompt_title"]}
                                </h4>
                                <div className="prompts__item-group mb-3">
                                    <h5 className="prompts__item-author">
                                        By:
                                        <span>
                                            {prompt["prompt_author"].name}
                                        </span>
                                    </h5>
                                    <div className="prompts__item-elements">
                                        <button className="prompts__item-copy card p-1">
                                            <svg>
                                                <use xlinkHref="#clipboard"></use>
                                            </svg>
                                        </button>
                                        {auth.user &&
                                            (prompt["is_liked_by_user"] ? (
                                                <form
                                                    action={route(
                                                        "prompts.unlike",
                                                        { prompt }
                                                    )}
                                                    method="POST"
                                                >
                                                    <button
                                                        type="submit"
                                                        className="prompts__item-like card p-1"
                                                    >
                                                        <svg>
                                                            <use xlinkHref="#heartFill"></use>
                                                        </svg>
                                                    </button>
                                                </form>
                                            ) : (
                                                <form
                                                    action={route(
                                                        "prompts.like",
                                                        {
                                                            prompt,
                                                        }
                                                    )}
                                                    method="POST"
                                                >
                                                    <button
                                                        type="submit"
                                                        className="prompts__item-like card p-1"
                                                    >
                                                        <svg>
                                                            <use xlinkHref="#heart"></use>
                                                        </svg>
                                                    </button>
                                                </form>
                                            ))}
                                    </div>
                                </div>
                                <p className="prompts__item-text card-text">
                                    {prompt["prompt_content"]}
                                </p>
                                <span className="prompts__item-date">
                                    {prompt["created_at"]}
                                </span>
                            </div>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p className="text-center">No prompts found.</p>
            )}
        </>
    );
}
