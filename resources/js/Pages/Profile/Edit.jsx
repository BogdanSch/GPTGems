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
            <section className="profile" id="profile">
                <div className="container">
                    <div className="profile__wrap">
                        <div className="profile__card card">
                            <div className="card-body">
                                <div className="mb-5">
                                    <UpdateProfileImageForm />
                                </div>
                                <div className="mb-5">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                    />
                                </div>
                                <div className="mb-5">
                                    <UpdatePasswordForm />
                                </div>
                                <div className="mb-3">
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
