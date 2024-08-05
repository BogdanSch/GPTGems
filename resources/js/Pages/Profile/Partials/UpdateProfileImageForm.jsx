import React from "react";
import { usePage, useForm } from "@inertiajs/react";

import Image from "@/Components/Image";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";

export default function UpdateProfileImageForm() {
    const { data, setData, post, processing, errors } = useForm({
        profile_photo: null,
    });

    const { auth } = usePage().props;
    const userData = auth.user.data;

    const submitProfileImage = (event) => {
        event.preventDefault();
        post(route("profile.updateProfilePicture"), {
            preserveScroll: true,
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <>
            {userData["profile_photo_path"] && (
                <div className="profile__image">
                    <Image
                        src={userData["profile_photo_path"]}
                        alt="User Profile Photo"
                    />
                </div>
            )}
            <h2 className="prompts__title text-center mt-3">
                Change your <span className="secondary">profile picture</span>
            </h2>
            <form
                onSubmit={submitProfileImage}
                className="profile__form"
                encType="multipart/form-data"
            >
                <div className="form-group text-center mb-3">
                    <InputLabel
                        htmlFor="profilePhoto"
                        value="Upload your profile Photo: (jpeg, png, jpg, gif)*"
                    />
                    <input
                        type="file"
                        className="form-control mt-2"
                        id="profilePhoto"
                        name="profile_photo"
                        onChange={(event) => {
                            setData("profile_photo", event.target.files[0]);
                        }}
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        required
                    />
                    <InputError
                        message={errors["profile_photo"]}
                        className="mt-2"
                    />
                </div>
                <div className="text-center">
                    <PrimaryButton type="submit" disabled={processing}>
                        Upload Photo
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}
