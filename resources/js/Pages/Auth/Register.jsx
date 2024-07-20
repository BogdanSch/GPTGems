import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Inputs/InputError";

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
            <section className="sign-up">
                <div className="container">
                    <div className="sign-up__wrap">
                        <div className="card p-2">
                            <div className="card-body">
                                <div className="text-content-full text-center mb-4">
                                    <h2 className="sign-up__title card-title text-center mb-2">
                                        Register
                                    </h2>
                                    <p className="sign-up__hint">
                                        Already have an account?{" "}
                                        <a href={route("login")}>Sign in now</a>
                                    </p>
                                </div>
                                <form onSubmit={submitRegistration}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="John Doe"
                                            autoComplete="name"
                                            isFocused={true}
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
                                        <label htmlFor="email" className="form-label">
                                            Email address:
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
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
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Password:
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
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
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Confirm Password:
                                        </label>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            className="form-control"
                                            id="password_confirmation"
                                            placeholder="password123"
                                            value={data.password_confirmation}
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
                                            <button
                                                className="btn btn-primary"
                                                disabled={processing}
                                            >
                                                Register
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
