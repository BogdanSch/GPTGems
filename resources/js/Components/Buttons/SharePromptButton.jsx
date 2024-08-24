import React, { useRef } from "react";
import copyContentToClipboard from "@/Utils/copyContentToClipboard";
import playButtonAnimation from "@/Utils/playButtonAnimation";

export default function SharePromptButton({ prompt }) {
    const shareButtonRef = useRef(null);

    const handlePromptSharing = (event) => {
        event.preventDefault();
        const pageUrl = `${window.location.origin}/prompts/${prompt["id"]}`;
        copyContentToClipboard(pageUrl);

        playButtonAnimation(
            shareButtonRef.current,
            `<svg><use href="#share"></use></svg>`,
            `<svg><use href="#shareFill"></use></svg>`
        );
    };

    return (
        <button
            className="prompts__item-share card p-1"
            onClick={(event) => handlePromptSharing(event)}
            ref={shareButtonRef}
        >
            <svg>
                <use href="#share"></use>
            </svg>
        </button>
    );
}
