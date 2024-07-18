import React, { useEffect, useRef } from "react";

import Header from "@/Components/Partials/Header";
import Footer from "@/Components/Partials/Footer";
import ScrollTop from "@/Components/ScrollTop/ScrollTop";

export default function Authenticated({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">{children}</main>
            <Footer />
            <ScrollTop />
        </div>
    );
}
