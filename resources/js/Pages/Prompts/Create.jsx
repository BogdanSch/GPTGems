import React from "react";
import { Head, useForm } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/Inputs/InputError";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        prompt_title: "",
        prompt_content: "",
    });

    const submitCreate = (event) => {
        event.preventDefault();
        post(route("prompts.store", { data }));
    };

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
                                onSubmit={submitCreate}
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
                                        value={data["prompt_title"]}
                                        onChange={(event) => {
                                            setData(
                                                "prompt_title",
                                                event.target.value
                                            );
                                        }}
                                    />
                                    <InputError
                                        message={errors["prompt_title"]}
                                        className="mt-2"
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
                                        value={data["prompt_content"]}
                                        onChange={(event) => {
                                            setData(
                                                "prompt_content",
                                                event.target.value
                                            );
                                        }}
                                    />
                                    <InputError
                                        message={errors["prompt_content"]}
                                        className="mt-2"
                                    />
                                </div>
                                <PrimaryButton
                                    disabled={processing}
                                    type="submit"
                                    isOutline={false}
                                >
                                    Create the prompt
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
