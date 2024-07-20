import React from "react";
import { usePage, Head, useForm, router } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Edit({ prompt }) {
    const { csrf } = usePage().props;
    const promptData = prompt.data;

    const { data, setData, put, processing, errors, reset } = useForm({
        prompt_title: promptData["prompt_title"],
        prompt_content: promptData["prompt_content"],
    });

    const handleUpdate = async (event) => {
        event.preventDefault();
        put(route("prompts.update", { prompt: promptData }));
    };

    return (
        <>
            <Head title={`Editing Prompt: ${promptData["prompt_title"]}`} />
            <Authenticated>
                <section className="prompts" id="prompts">
                    <div className="container">
                        <div className="prompts__wrap">
                            <h2 className="prompts__title text-center">
                                Let's edit <span>your prompt together!</span>
                            </h2>
                            <form
                                className="prompts__form mt-5"
                                onSubmit={handleUpdate}
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
                                        onChange={(event) =>
                                            setData(
                                                "prompt_title",
                                                event.target.value
                                            )
                                        }
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
                                        onChange={(event) =>
                                            setData(
                                                "prompt_content",
                                                event.target.value
                                            )
                                        }
                                        value={data["prompt_content"]}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
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
