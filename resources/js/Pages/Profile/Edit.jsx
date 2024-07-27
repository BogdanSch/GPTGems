import React from "react";
import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdateProfileImageForm from "./Partials/UpdateProfileImageForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Edit Profile" />
            <section class="profile" id="profile">
                <div class="container">
                    <div class="profile__wrap">
                        <div class="profile__card card py-3 px-5">
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
            </section>
        </AuthenticatedLayout>
    );
}
