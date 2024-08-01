import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "@inertiajs/react";

import Modal from "@/Components/Modals/Modal";
import DangerButton from "@/Components/Buttons/DangerButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";

export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (event) => {
        event.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <>
            <div className="text-content full text-center mt-2">
                <h2 className="prompts__title">Delete Account</h2>
                <p className="prompts__description mt-1">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
                <DangerButton onClick={confirmUserDeletion}>
                    Delete Account
                </DangerButton>
            </div>
            {createPortal(
                <Modal
                    id="removeUserModal"
                    title="Delete Your User Account?"
                    showModal={confirmingUserDeletion}
                    hideModal={closeModal}
                >
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="prompts__title">
                            Are you sure you want to delete your account?
                        </h2>
                        <p className="prompts__description mt-1">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>
                        <div className="mt-2">
                            <InputLabel
                                htmlFor="password"
                                value="Password: "
                                className="sr-only"
                            />
                            <input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(event) =>
                                    setData("password", event.target.value)
                                }
                                className="form-control"
                                placeholder="Password"
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-5 d-flex justify-content-end">
                            <SecondaryButton onClick={closeModal} type="reset">
                                Cancel
                            </SecondaryButton>
                            <DangerButton
                                type="submit"
                                className="ms-3"
                                disabled={processing}
                            >
                                Delete Account
                            </DangerButton>
                        </div>
                    </form>
                </Modal>,
                document.body
            )}
        </>
    );
}
