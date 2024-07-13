import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

// Get CSRF token from Laravel
const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        // Pass CSRF token to the App component
        root.render(<App {...props} csrf={csrfToken} />);
    },
    progress: {
        color: "#4B5563",
    },
});
