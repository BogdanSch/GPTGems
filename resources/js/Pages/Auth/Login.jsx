import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/Inputs/InputError";

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
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <section className="sign-in">
                <div className="container">
                    <div className="sign-in__wrap">
                        <div className="card p-2">
                            <div className="card-body">
                                <div className="text-content-full text-center mb-4">
                                    <h2 className="sign-in__title card-title text-center mb-2">
                                        Log in
                                    </h2>
                                    <p className="sign-in__hint">
                                        New to GPTGems?{" "}
                                        <a href={route("register")}>
                                            Sign up for a free account
                                        </a>
                                    </p>
                                </div>
                                <form onSubmit={submitLogin}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email address:
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
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
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Password:{" "}
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
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
                                                href={route("password.request")}
                                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-grid">
                                            <button
                                                className="btn btn-primary"
                                                disabled={processing}
                                            >
                                                Log in
                                            </button>
                                        </div>
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
