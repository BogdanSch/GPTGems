import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import ExternalServicesAuth from "@/Components/Partials/Auth/ExternalServicesAuth";

import { TextInput, InputLabel, InputError } from "@/Components/Inputs/";
import { PrimaryButton } from "@/Components/Buttons/";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submitRegistration = (event) => {
        event.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <section
                className="sign-up"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="sign-up__wrap">
                        <div className="card p-2">
                            <div className="card-body">
                                <div className="text-content-full text-center mb-4">
                                    <h2 className="sign-up__title card-title text-center mb-2">
                                        Register for free
                                    </h2>
                                    <p className="sign-up__hint">
                                        Already have an account?{" "}
                                        <Link
                                            href={route("login")}
                                            className="sign-up__link sign-up__to-login"
                                        >
                                            Login right now
                                        </Link>
                                    </p>
                                </div>
                                <form
                                    onSubmit={submitRegistration}
                                    className="auth-form"
                                >
                                    <div className="auth-form__content">
                                        <div className="mb-3">
                                            <InputLabel htmlFor="name">
                                                Name:
                                            </InputLabel>
                                            <TextInput
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="John Doe"
                                                autoComplete="name"
                                                onChange={(event) =>
                                                    setData(
                                                        "name",
                                                        event.target.value
                                                    )
                                                }
                                                value={data.name}
                                                required
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <InputLabel htmlFor="email">
                                                Email address:
                                            </InputLabel>
                                            <TextInput
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="name@example.com"
                                                autoComplete="username"
                                                onChange={(event) =>
                                                    setData(
                                                        "email",
                                                        event.target.value
                                                    )
                                                }
                                                value={data.email}
                                                required
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <InputLabel htmlFor="password">
                                                Password:
                                            </InputLabel>
                                            <TextInput
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="password123"
                                                autoComplete="new-password"
                                                onChange={(event) =>
                                                    setData(
                                                        "password",
                                                        event.target.value
                                                    )
                                                }
                                                value={data.password}
                                                required
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <InputLabel htmlFor="password">
                                                Confirm Password:
                                            </InputLabel>
                                            <TextInput
                                                type="password"
                                                name="password_confirmation"
                                                id="password_confirmation"
                                                placeholder="password123"
                                                value={
                                                    data.password_confirmation
                                                }
                                                autoComplete="new-password"
                                                onChange={(event) =>
                                                    setData(
                                                        "password_confirmation",
                                                        event.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={
                                                    errors.password_confirmation
                                                }
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-grid">
                                                <PrimaryButton
                                                    disabled={processing}
                                                    type="submit"
                                                    isOutline={false}
                                                >
                                                    Register
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                    <ExternalServicesAuth />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
