import React, { useEffect, useRef } from "react";

export default function SwitchWebsiteThemeButton() {
    const switchThemeButtonRef = useRef(null);

    useEffect(() => {
        const htmlBlock = document.documentElement;
        const saveUserTheme = localStorage.getItem("user-theme");

        let userTheme;
        if (window.matchMedia) {
            userTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
        }
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                !saveUserTheme ? changeTheme() : null;
            });

        const switchThemeButton = switchThemeButtonRef.current;

        if (switchThemeButton) {
            switchThemeButton.addEventListener("click", () => {
                changeTheme(true);
            });
        }

        function setThemeClass() {
            if (saveUserTheme) {
                htmlBlock.classList.add(saveUserTheme);
                htmlBlock.dataset.bsTheme = saveUserTheme;
            } else {
                htmlBlock.classList.add(userTheme);
                htmlBlock.dataset.bsTheme = userTheme;
            }
        }
        setThemeClass();

        function setThemeIcon() {
            let currentTheme = htmlBlock.classList.contains("light")
                ? "light"
                : "dark";

            if (currentTheme === "light") {
                switchThemeButton.innerHTML = `<svg class="page__svg"><use href="#sunIcon"></use></svg>`;
            } else {
                switchThemeButton.innerHTML = `<svg class="page__svg"><use href="#moonIcon"></use></svg>`;
            }
        }

        function changeTheme(saveTheme = false) {
            let currentTheme = htmlBlock.classList.contains("light")
                ? "light"
                : "dark";
            let newTheme;
            if (currentTheme === "light") {
                newTheme = "dark";
            } else {
                newTheme = "light";
            }

            htmlBlock.classList.remove(currentTheme);
            htmlBlock.classList.add(newTheme);
            htmlBlock.dataset.bsTheme = newTheme;

            saveTheme ? localStorage.setItem("user-theme", newTheme) : null;
            setThemeIcon();
        }

        setThemeIcon();
    }, []);
    return (
        <button
            type="button"
            className="page__theme"
            ref={switchThemeButtonRef}
        >
            <i className="bi bi-brightness-high-fill"></i>
            <i className="bi bi-moon-stars-fill"></i>
        </button>
    );
}
