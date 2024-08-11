import React from "react";
import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdateProfileImageForm from "./Partials/UpdateProfileImageForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import FlashMessage from "@/Components/FlashMessages/FlashMessage";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Edit Profile" />
            <FlashMessage />
            <section
                className="profile"
                id="profile"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="profile__wrap">
                        <div className="profile__card card">
                            <div className="card-body">
                                <div
                                    className="profile__section mb-5"
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000"
                                >
                                    <UpdateProfileImageForm />
                                </div>
                                <div
                                    className="profile__section mb-5"
                                    data-aos="fade-left"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000"
                                >
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                    />
                                </div>
                                <div
                                    className="profile__section mb-5"
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000"
                                >
                                    <UpdatePasswordForm />
                                </div>
                                <div
                                    className="profile__section"
                                    data-aos="fade-left"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000"
                                >
                                    <DeleteUserForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
