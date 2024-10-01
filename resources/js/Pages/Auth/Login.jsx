import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import ExternalServicesAuth from "@/Components/Partials/Auth/ExternalServicesAuth";

import { TextInput, InputLabel, InputError, Checkbox } from "@/Components/Inputs/";
import { PrimaryButton } from "@/Components/Buttons/";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submitLogin = (event) => {
        event.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Login" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <section
                className="auth sign-in"
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000"
            >
                <div className="container">
                    <div className="sign-in__wrap">
                        <div className="card p-2">
                            <div className="card-body">
                                <div className="text-content-full text-center mb-4">
                                    <h2 className="sign-in__title card-title text-center mb-2">
                                        Login now
                                    </h2>
                                    <p className="sign-in__hint">
                                        New to GPTGems?{" "}
                                        <Link
                                            href={route("register")}
                                            className="sign-in__to-register sign-in__link"
                                        >
                                            Register for a free account
                                        </Link>
                                    </p>
                                </div>
                                <form
                                    onSubmit={submitLogin}
                                    className="auth-form"
                                >
                                    <div className="auth-form__content">
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
                                                value={data.email}
                                                required
                                                onChange={(event) =>
                                                    setData(
                                                        "email",
                                                        event.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <InputLabel htmlFor="password">
                                                Password:{" "}
                                            </InputLabel>
                                            <TextInput
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={data.password}
                                                placeholder="password123"
                                                required
                                                autoComplete="current-password"
                                                onChange={(event) =>
                                                    setData(
                                                        "password",
                                                        event.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="block">
                                            <label className="flex items-center">
                                                <Checkbox
                                                    name="remember"
                                                    checked={data.remember}
                                                    onChange={(event) =>
                                                        setData(
                                                            "remember",
                                                            event.target.checked
                                                        )
                                                    }
                                                />
                                                <span className="ms-2 text-sm text-gray-600">
                                                    Remember me
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-2 text-center">
                                            {canResetPassword && (
                                                <Link
                                                    href={route(
                                                        "password.request"
                                                    )}
                                                    className="sign-in__forget sign-in__link"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-grid">
                                                <PrimaryButton
                                                    disabled={processing}
                                                    isOutline={false}
                                                    type="submit"
                                                >
                                                    Login
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
