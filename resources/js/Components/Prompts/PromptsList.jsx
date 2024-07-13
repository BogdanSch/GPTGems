import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function PromptsList({
    prompts,
    showPromptPagination,
    search,
    csrfToken,
}) {
    return (
        <>
            {prompts.length > 0 ? (
                <ul className="prompts__list mt-5">
                    {prompts.map((prompt) => (
                        <Link
                            key={prompt.id}
                            className="prompts__item card"
                            href={route("prompts.show", { prompt })}
                        >
                            <div className="card-body">
                                <h4 className="prompts__item-title card-title mb-4">
                                    {prompt.prompt_title}
                                </h4>
                                <div className="prompts__item-group mb-3">
                                    <h5 className="prompts__item-author">
                                        By: <span>{prompt.user.name}</span>
                                    </h5>
                                    <div className="prompts__item-elements">
                                        <button className="prompts__item-copy card p-1">
                                            <svg>
                                                <use xlinkHref="#clipboard"></use>
                                            </svg>
                                        </button>
                                        {auth.user &&
                                            (auth.user.likes.includes(
                                                prompt.id
                                            ) ? (
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
                                                        { prompt }
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
                                    {prompt.prompt_content}
                                </p>
                                <span className="prompts__item-date">
                                    {new Date(
                                        prompt.created_at
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p className="text-center">No prompts found.</p>
            )}
            {showPromptPagination && (
                <div className="prompts__pagination mt-5">
                    {prompts.prev_page_url && (
                        <Link
                            href={`${prompts.prev_page_url}${
                                search
                                    ? `&search=${encodeURIComponent(search)}`
                                    : ""
                            }&_token=${csrfToken}`}
                            className="btn btn-outline-pagination"
                        >
                            Previous
                        </Link>
                    )}
                    {[...Array(prompts.last_page).keys()].map((page) => (
                        <Link
                            key={page}
                            href={`${prompts.path}?page=${page + 1}${
                                search
                                    ? `&search=${encodeURIComponent(search)}`
                                    : ""
                            }&_token=${csrfToken}`}
                            className={`pagination__link ${
                                prompts.current_page === page + 1
                                    ? "active"
                                    : ""
                            }`}
                        >
                            {page + 1}
                        </Link>
                    ))}
                    {prompts.next_page_url && (
                        <Link
                            href={`${prompts.next_page_url}${
                                search
                                    ? `&search=${encodeURIComponent(search)}`
                                    : ""
                            }&_token=${csrfToken}`}
                            className="btn btn-outline-pagination"
                        >
                            Next
                        </Link>
                    )}
                </div>
            )}
        </>
    );
}
