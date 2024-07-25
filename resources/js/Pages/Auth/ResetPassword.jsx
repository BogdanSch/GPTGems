import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submitResetPassword = (event) => {
        event.preventDefault();
        post(route("password.store"));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <section className="password">
                <div className="container">
                    <div className="password__wrap">
                        <div className="card password__card py-5 px-4">
                            <div className="card-body">
                                <form onSubmit={submitResetPassword}>
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                        />
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            autoComplete="username"
                                            onChange={(event) =>
                                                setData(
                                                    "email",
                                                    event.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="password"
                                            value="Password"
                                        />
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="form-control"
                                            autoComplete="new-password"
                                            isFocused={true}
                                            onChange={(event) =>
                                                setData(
                                                    "password",
                                                    event.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="password_confirmation"
                                            value="Confirm Password"
                                        />
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="form-control"
                                            autoComplete="new-password"
                                            onChange={(event) =>
                                                setData(
                                                    "password_confirmation",
                                                    event.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end mt-4">
                                        <PrimaryButton disabled={processing}>
                                            Reset Password
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
