import React, { useEffect, useRef } from "react";

export default function ScrollTop() {
    const scrollTopRef = useRef(null);
    const screenOffset = 150;

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTopRef.current) {
                if (window.scrollY >= screenOffset) {
                    scrollTopRef.current.classList.add("active");
                } else {
                    scrollTopRef.current.classList.remove("active");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a className="scroll-top" href="#start" ref={scrollTopRef}>
            <svg className="scroll-top__svg">
                <use xlinkHref="#arrowTop"></use>
            </svg>
        </a>
    );
}
