import React, { useState, useRef } from "react";
import { usePage, router } from "@inertiajs/react";

export default function Search({
    previousSearchTerm = "",
    searchLikedPrompts = false,
}) {
    const { csrf } = usePage().props;
    const [searchTerm, setSearchTerm] = useState(previousSearchTerm);
    const searchInputRef = useRef(null);

    const submitSearch = (event) => {
        event.preventDefault();
        router.get(
            route("prompts.search", {
                search: searchTerm,
                searchLikedPrompts: searchLikedPrompts,
            }),
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
        <form className="prompts__form mt-5" onSubmit={submitSearch}>
            <div className="input-group">
                <input
                    className="prompts__form-search form-control"
                    id="promptsSearch"
                    type="search"
                    placeholder="Search for a tag or a username"
                    name="search"
                    value={searchTerm}
                    ref={searchInputRef}
                    onChange={() => setSearchTerm(searchInputRef.current.value)}
                />
                <button
                    type="submit"
                    className="btn btn-primary input-group-text"
                >
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    );
}
