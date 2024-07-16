import { useState } from "react";
import Header from "@/Components/Partials/Header";
import Footer from "@/Components/Partials/Footer";

export default function Authenticated({ user, children }) {
    return (
        <div className="wrapper" id="start">
            <Header user={user} />
            <main className="main">{children}</main>
            <Footer />
            <a className="scroll-top" href="#start">
                <svg className="scroll-top__svg">
                    <use xlinkHref="#arrowTop"></use>
                </svg>
            </a>
        </div>
    );
}
