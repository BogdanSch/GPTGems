import React from "react";
import { router, Head, Link, useForm, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import Image from "@/Components/Image";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import DangerButton from "@/Components/Buttons/DangerButton";

export default function VerifyEmail({ status }) {
    const { csrf } = usePage().props;
    const { post, processing } = useForm({});

    const submitVerifyEmail = (event) => {
        event.preventDefault();
        post(route("verification.send"));
    };

    const handleLogout = (event) => {
        event.preventDefault();
        router.post(
            route("logout"),
            {
                _token: csrf,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />
            <GuestLayout>
                <Head title="Confirm Password" />
                <section className="password">
                    <div className="container">
                        <div className="password__wrap">
                            <div className="card password__card py-5 px-4">
                                <div className="card-body">
                                    <div className="text-content full">
                                        <Image
                                            src={
                                                "/images/Verify_Email_Icon.jpg"
                                            }
                                            className="password__image"
                                            alt="Verify Your Email Image"
                                        />
                                        <div className="password__description">
                                            Thanks for signing up! Before
                                            getting started, could you verify
                                            your email address by clicking on
                                            the link we just emailed to you? If
                                            you didn't receive the email, we
                                            will gladly send you another.
                                        </div>
                                    </div>
                                    {status === "verification-link-sent" && (
                                        <div
                                            className="alert alert-success mt-3"
                                            role="alert"
                                        >
                                            A new verification link has been
                                            sent to the email address you
                                            provided during registration.
                                        </div>
                                    )}
                                    <form
                                        className="password__form"
                                        onSubmit={submitVerifyEmail}
                                    >
                                        <div className="mt-4 d-flex flex-row align-items-center justify-content-between">
                                            <PrimaryButton
                                                disabled={processing}
                                            >
                                                Resend Verification Email
                                            </PrimaryButton>
                                            <DangerButton
                                                onClick={handleLogout}
                                                disabled={processing}
                                            >
                                                Log Out
                                            </DangerButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </GuestLayout>
    );
}
