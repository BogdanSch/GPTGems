import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submitConfirmPassword = (event) => {
        event.preventDefault();
        post(route("password.confirm"));
    };
    return (
        <GuestLayout>
            <Head title="Confirm Password" />
            <section className="password">
                <div className="container">
                    <div className="password__wrap">
                        <div className="card password__card py-5 px-4">
                            <div className="card-body">
                                <div className="password__description mb-4">
                                    This is a secure area of the application.
                                    Please confirm your password before
                                    continuing.
                                </div>
                                <form onSubmit={submitConfirmPassword}>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="password"
                                            value="Password"
                                        />
                                        <input
                                            className="form-control"
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <PrimaryButton disabled={processing}>
                                            Confirm the password
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
