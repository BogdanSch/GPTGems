import React, { useEffect, useRef } from "react";

export default function ScrollTop() {
    const scrollTopRef = useRef(null);

    useEffect(() => {
        const screenOffset = 150;

        window.addEventListener("scroll", (event) => {
            if (window.scrollY >= screenOffset) {
                scrollTopRef.current.classList.add("active");
            } else {
                if (scrollTopRef.current.classList.contains("active")) {
                    scrollTopRef.current.classList.remove("active");
                }
            }
        });
    }, []);
    return (
        <a className="scroll-top" href="#start" ref={scrollTopRef}>
            <svg className="scroll-top__svg">
                <use xlinkHref="#arrowTop"></use>
            </svg>
        </a>
    );
}
