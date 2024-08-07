import React, { useEffect } from "react";

import Header from "@/Components/Partials/Header";
import Footer from "@/Components/Partials/Footer";
import ScrollTop from "@/Components/ScrollTop/ScrollTop";

import "aos/dist/aos.css";
import Aos from "aos";

export default function Authenticated({ children }) {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <main className="main">{children}</main>
            <Footer />
            <ScrollTop />
        </div>
    );
}
