import React from "react";
import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Inputs/InputError";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submitForgotPassword = (event) => {
        event.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <section className="password">
                <div className="container">
                    <div className="password__wrap">
                        <div className="card password__card py-5 px-4">
                            <div className="card-body">
                                <div className="text-content text-center full mb-5">
                                    <h2 className="password__title">
                                        Reset Password
                                    </h2>
                                    <div className="password__description">
                                        Forgot your password? No problem. Just
                                        let us know your email address and we
                                        will email you a password reset link
                                        that will allow you to choose a new one.
                                    </div>
                                </div>
                                {status && (
                                    <div className="mb-4 font-medium text-sm text-green-600">
                                        {status}
                                    </div>
                                )}
                                <form onSubmit={submitForgotPassword}>
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Enter your email: "
                                        onChange={(event) =>
                                            setData("email", event.target.value)
                                        }
                                        autoComplete="email"
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                    <div className="mt-4 text-center">
                                        <PrimaryButton disabled={processing}>
                                            Email Password Reset Link
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
