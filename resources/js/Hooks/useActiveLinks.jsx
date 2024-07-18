import { useEffect } from "react";

const useActiveLinks = (selector) => {
    const indexPagePaths = ["/", "/home", ""];

    useEffect(() => {
        const handleLinks = (links, currentPage) => {
            links.forEach((link) => {
                const elementHref = link.getAttribute("href").split("/").pop();
                if (currentPage === elementHref) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        };

        const path = window.location.pathname;
        const allLinks = document.querySelectorAll(selector);

        if (path.split("/").includes("prompts")) {
            handleLinks(allLinks, "prompts");
        } else {
            let currentPage = path.split("/").pop();
            if (indexPagePaths.includes(currentPage)) {
                allLinks[0].classList.add("active");
            } else {
                handleLinks(allLinks, currentPage);
            }
        }
    }, [selector, indexPagePaths]);
};

export default useActiveLinks;
