import React, { useEffect, useRef } from "react";
import Header from "@/Components/Partials/Header";
import Footer from "@/Components/Partials/Footer";
import ScrollTop from "@/Components/ScrollTop/ScrollTop";

export default function Authenticated({ user, children }) {
    return (
        <div className="wrapper" id="start">
            <Header user={user} />
            <main className="main">{children}</main>
            <Footer />
            <ScrollTop />
        </div>
    );
}
