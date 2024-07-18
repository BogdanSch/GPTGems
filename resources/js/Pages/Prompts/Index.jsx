import React from "react";
import { usePage, Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PromptsList from "@/Components/Prompts/PromptsList";

export default function Index({ prompts, search }) {
    const { auth, csrf } = usePage().props;

    return (
        <>
            <Head title="Latest Prompts" />
            <Authenticated>
                <section className="prompts" id="prompts">
                    <div className="container">
                        <div className="prompts__wrap">
                            <h2 className="prompts__title text-center">
                                Discover all the latest prompts
                            </h2>
                            <form
                                className="prompts__form mt-5"
                                action={route("prompts.search")}
                                method="get"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf}
                                />
                                <div className="input-group">
                                    <input
                                        type="search"
                                        placeholder="Search for a tag or a username"
                                        name="search"
                                        className="prompts__form-search form-control"
                                        id="promptsSearch"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary input-group-text"
                                        data-mdb-ripple-init
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                            <div className="prompts__data">
                                <h3 className="prompts__sub-title text-center mt-5">
                                    Latest prompts sorted by:{" "}
                                    <span className="prompts__tag">
                                        {search ? search : "All"}
                                    </span>
                                </h3>
                                <PromptsList
                                    prompts={prompts}
                                    search={search}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
