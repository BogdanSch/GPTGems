import React from "react";
import { usePage, useForm } from "@inertiajs/react";
import Image from "@/Components/Image";

export default function UpdateProfileImageForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const { csrf, auth } = usePage().props;
    const userData = auth.user.data;

    return (
        <>
            {userData["profile_photo_path"] && (
                <div class="profile__image">
                    <Image
                        src={userData["profile_photo_path"]}
                        alt="User Profile Photo"
                    />
                </div>
            )}
            <h2 class="prompts__title text-center mt-3">
                Change your <span class="secondary">profile picture</span>
            </h2>
            <form
                action={route("profile.update")}
                class="profile__form"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="form-group mb-3">
                    <label for="profilePhoto">
                        Upload your profile Photo: (jpeg, png, jpg, gif)*
                    </label>
                    <input
                        type="file"
                        class="form-control mt-2"
                        id="profilePhoto"
                        name="profile_photo"
                        required
                    />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">
                        Upload Photo
                    </button>
                </div>
            </form>
        </>
    );
}
