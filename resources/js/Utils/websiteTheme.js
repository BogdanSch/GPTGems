"use strict";

const DEFAULT_USER_THEME = "light";

const getSavedUserTheme = () => {
    return localStorage.getItem("user-theme") || DEFAULT_USER_THEME;
};

export const setThemeClass = (htmlBlock) => {
    const savedUserTheme = getSavedUserTheme();
    htmlBlock.classList.add(savedUserTheme);
    htmlBlock.dataset.bsTheme = savedUserTheme;
};

export const changeTheme = (htmlBlock, setButtonThemeIcon) => {
    let currentTheme = getSavedUserTheme();
    let newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("user-theme", newTheme);

    htmlBlock.classList.remove(currentTheme);
    setThemeClass(htmlBlock);

    if (setButtonThemeIcon) {
        setButtonThemeIcon(htmlBlock);
    }
};
