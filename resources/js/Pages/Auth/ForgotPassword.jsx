import React from "react";
import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import Image from "@/Components/Image";
import InputError from "@/Components/Inputs/InputError";
import { PrimaryButton } from "@/Components/Buttons/";

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
            <section
                className="password mb-5"
                data-aos="zoom-out"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="password__wrap">
                        <div className="card password__card py-3 px-4">
                            <div className="card-body">
                                <div className="text-content text-center full mb-5">
                                    <Image
                                        src={"/images/forgot-password-icon.jpg"}
                                        alt="Forgot Password Hint"
                                        isSliderImage={false}
                                        className="w-75"
                                    />
                                    <h2 className="password__title mt-4">
                                        Forgot Your Password
                                    </h2>
                                    <p className="password__description">
                                        Forgot your password? No problem. Just
                                        let us know your email address and we
                                        will email you a password reset link
                                        that will allow you to choose a new one.
                                    </p>
                                </div>
                                {status && (
                                    <div className="mb-4 font-medium text-sm text-green-600">
                                        {status}
                                    </div>
                                )}
                                <form onSubmit={submitForgotPassword}>
                                    <div className="mb-4">
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            placeholder="Enter your email: "
                                            onChange={(event) =>
                                                setData(
                                                    "email",
                                                    event.target.value
                                                )
                                            }
                                            autoComplete="email"
                                            required
                                        />
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="text-center">
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
