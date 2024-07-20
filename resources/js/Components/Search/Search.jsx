import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";

export default function Search({ previousSearchTerm = "" }) {
    const { csrf } = usePage().props;
    const [searchTerm, setSearchTerm] = useState(previousSearchTerm);

    console.log(previousSearchTerm);

    const submitSearch = (event) => {
        event.preventDefault();
        router.get(
            route("prompts.search", { search: searchTerm }),
            {},
            {
                headers: {
                    "X-CSRF-Token": csrf,
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <form className="prompts__form mt-5" onSubmit={submitSearch}>
            <input type="hidden" name="_token" value={csrf} />
            <div className="input-group">
                <input
                    className="prompts__form-search form-control"
                    id="promptsSearch"
                    type="search"
                    placeholder="Search for a tag or a username"
                    name="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
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
