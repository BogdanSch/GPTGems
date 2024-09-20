import React from "react";

const ExternalServicesAuth = () => {
    return (
        <>
            <div className="auth-form__separator mt-5 mb-5">
                <div className="auth-form__separator-text text-center">or</div>
            </div>
            <div className="auth-form__social">
                <ul className="auth-form__list">
                    <li className="auth-form__item">
                        <a
                            href={route("google.redirect")}
                            className="btn btn-secondary full"
                        >
                            <svg className="btn-svg">
                                <use xlinkHref="#googleIcon"></use>
                            </svg>
                            Continue with Google
                        </a>
                    </li>
                    <li className="auth-form__item mt-2 ">
                        <a
                            href={route("github.redirect")}
                            className="btn btn-info full"
                        >
                            <svg className="btn-svg">
                                <use xlinkHref="#githubIcon"></use>
                            </svg>
                            Continue with Github
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ExternalServicesAuth;
