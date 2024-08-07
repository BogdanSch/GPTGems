import React from "react";
import { Link } from "@inertiajs/react";

import Pagination from "../Pagination/Pagination";
import CopyPromptContentButton from "../Buttons/CopyPromptContentButton";
import LikePromptButton from "../Buttons/LikePromptButton";

export default function PromptsList({ prompts, search, showPagination }) {
    const handleLinkClick = (event) => {
        if (event.target.closest("button") || event.target.closest("form")) {
            event.preventDefault();
        }
    };

    const promptsData = prompts.data;

    return (
        <>
            {promptsData.length > 0 ? (
                <>
                    <ul className="prompts__list mt-5">
                        {promptsData.map((prompt) => (
                            <div key={prompt.id} className="prompts__item card">
                                <Link
                                    className="card-body"
                                    href={route("prompts.show", {
                                        prompt: prompt,
                                    })}
                                    onClick={handleLinkClick}
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
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
                    {showPagination && (
                        <Pagination
                            class="mt-6"
                            links={prompts.meta.links}
                            searchTerm={search}
                        />
                    )}
                </>
            ) : (
                <p className="text-center">No prompts found.</p>
            )}
        </>
    );
}
