import { useState } from "react";
import Header from "@/Components/Partials/Header";
import Footer from "@/Components/Partials/Footer";

export default function Authenticated({ user, children }) {
    return (
        <>
            <Header user={user} />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
}
