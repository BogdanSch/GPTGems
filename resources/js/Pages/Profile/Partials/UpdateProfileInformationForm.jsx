import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function UpdateProfileInformation({ mustVerifyEmail, status }) {
    const { auth } = usePage().props;
    const userData = auth.user.data;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: userData.name,
            email: userData.email,
        });

    const submitProfileInformation = (event) => {
        event.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <>
            <div className="text-content full mt-3 text-center">
                <h2 className="prompts__title">Profile Information</h2>
                <p className="prompts__description mt-1">
                    Update your account's profile information and email address.
                </p>
            </div>
            <form onSubmit={submitProfileInformation} className="profile__form">
                <div className="form-group mb-4">
                    <InputLabel htmlFor="name" value="New name:" />
                    <input
                        id="name"
                        className="form-control"
                        value={data.name}
                        onChange={(event) =>
                            setData("name", event.target.value)
                        }
                        autoComplete="name"
                        placeholder="Enter your new username: "
                        required
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="form-group mb-4">
                    <InputLabel htmlFor="email" value="New email:" />
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        value={data.email}
                        onChange={(event) =>
                            setData("email", event.target.value)
                        }
                        autoComplete="email"
                        placeholder="Enter your new email: "
                        required
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>
                {mustVerifyEmail && userData.email_verified_at === null && (
                    <div>
                        <p className="profile__description">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="btn btn-outline-primary"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>
                        {status === "verification-link-sent" && (
                            <div
                                className="alert alert-success mt-2 text-center"
                                role="alert"
                            >
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}
                <div className="text-center">
                    <PrimaryButton disabled={processing} isOutline={true}>
                        Save changes
                    </PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </>
    );
}
