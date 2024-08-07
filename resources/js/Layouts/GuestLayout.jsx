import React, { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

export default function Guest({ children }) {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="wrapper">
            <main className="main">{children}</main>
        </div>
    );
}
