import React from "react";
import { usePage, Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const { auth, csrf } = usePage().props;

    return (
        <>
            <Head title="Create A New Prompt" />
            <Authenticated>
                <section className="prompts" id="prompts">
                    <div className="container">
                        <div className="prompts__wrap">
                            <h2 className="prompts__title text-center">
                                Let's create <span>a new prompt together!</span>
                            </h2>
                            <form
                                className="prompts__form mt-5"
                                action={route("prompts.store")}
                                method="post"
                            >
                                <div className="mb-3">
                                    <label
                                        htmlFor="promptTitle"
                                        className="form-label"
                                    >
                                        Enter your prompt title:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="promptTitle"
                                        name="prompt_title"
                                        placeholder="Your prompt title: "
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="promptContent"
                                        className="form-label"
                                    >
                                        Enter your prompt content:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="10"
                                        id="promptContent"
                                        name="prompt_content"
                                        placeholder="Your prompt content: "
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
