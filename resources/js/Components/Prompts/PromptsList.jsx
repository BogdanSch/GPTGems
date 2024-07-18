import React from "react";
import { Link, usePage } from "@inertiajs/react";
import CopyPromptContentButton from "../Buttons/CopyPromptContentButton";
import LikePromptButton from "../Buttons/LikePromptButton";

export default function PromptsList({ prompts, search }) {
    const { auth, csrf } = usePage().props;
    const promptsData = prompts.data;

    return (
        <>
            {promptsData.length > 0 ? (
                <ul className="prompts__list mt-5">
                    {promptsData.map((prompt) => (
                        <div key={prompt.id} className="prompts__item card">
                            <Link
                                className="card-body"
                                href={route("prompts.show", { prompt })}
                                onClick={(e) => {
                                    if (
                                        e.target.closest("button") ||
                                        e.target.closest("form")
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            >
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
                                        <CopyPromptContentButton
                                            prompt={prompt}
                                        />
                                        <LikePromptButton prompt={prompt} />
                                    </div>
                                </div>
                                <p className="prompts__item-text card-text">
                                    {prompt["prompt_content"]}
                                </p>
                                <span className="prompts__item-date">
                                    {prompt["created_at"]}
                                </span>
                            </Link>
                        </div>
                    ))}
                </ul>
            ) : (
                <p className="text-center">No prompts found.</p>
            )}
        </>
    );
}
