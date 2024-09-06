import React, { useEffect, useRef } from "react";
import { setThemeClass, changeTheme } from "@/Utils/websiteTheme";

export default function SwitchWebsiteThemeButton() {
    const switchThemeButtonRef = useRef(null);

    useEffect(() => {
        const htmlBlock = document.documentElement;
        const switchThemeButton = switchThemeButtonRef.current;

        if (switchThemeButton) {
            switchThemeButton.addEventListener("click", () => {
                changeTheme(htmlBlock, setButtonThemeIcon);
            });
        }

        function setButtonThemeIcon(htmlBlock) {
            const currentTheme = htmlBlock.classList.contains("light")
                ? "light"
                : "dark";

            if (currentTheme === "light") {
                switchThemeButton.innerHTML = `<svg class="page__svg"><use href="#sunIcon"></use></svg>`;
            } else {
                switchThemeButton.innerHTML = `<svg class="page__svg"><use href="#moonIcon"></use></svg>`;
            }
        }

        setThemeClass(htmlBlock);
        setButtonThemeIcon(htmlBlock);

        return () => {
            if (switchThemeButtonRef.current) {
                switchThemeButtonRef.current.hide();
            }
        };
    }, [setThemeClass, changeTheme]);

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
