import React, { useRef } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import TextInput from "@/Components/Inputs/TextInput";

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (event) => {
        event.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }
                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <>
            <div className="text-content full text-center">
                <h2 className="prompts__title">Update Password</h2>

                <p className="prompts__description mt-1">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </div>
            <form onSubmit={updatePassword} className="profile__form">
                <div className="form-group mb-4">
                    <InputLabel
                        htmlFor="current_password"
                        value="Current Password:"
                    />
                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(event) =>
                            setData("current_password", event.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="current-password"
                        placeholder="Enter your current password: "
                    />
                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>
                <div className="form-group mb-4">
                    <InputLabel htmlFor="password" value="New Password:" />
                    <input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(event) =>
                            setData("password", event.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                        placeholder="Enter your new password: "
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="form-group mb-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password:"
                    />
                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(event) =>
                            setData("password_confirmation", event.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                        placeholder="Repeat your new password: "
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className="text-center">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
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
