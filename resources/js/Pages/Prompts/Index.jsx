import React from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessages/FlashMessage";
import PromptsList from "@/Components/Prompts/PromptsList";
import Search from "@/Components/Search/Search";

export default function Index({ prompts, search }) {
    return (
        <>
            <Head title="Latest Prompts" />
            <Authenticated>
                <FlashMessage />
                <section className="prompts" id="prompts">
                    <div className="container">
                        <div className="prompts__wrap">
                            <h2 className="prompts__title text-center">
                                Discover all the latest prompts
                            </h2>
                            <Search previousSearchTerm={search} />
                            <div className="prompts__data">
                                <h3 className="prompts__sub-title text-center mt-5">
                                    Latest prompts sorted by:{" "}
                                    <span className="prompts__tag">
                                        {search ? search : "All"}
                                    </span>
                                </h3>
                                <PromptsList
                                    prompts={prompts}
                                    showPagination={true}
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
