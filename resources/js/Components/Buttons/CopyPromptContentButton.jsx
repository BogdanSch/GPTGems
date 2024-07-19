import React from "react";
import useCopyPromptContent from "@/Hooks/useCopyPromptContent";

export default function CopyPromptContentButton({ prompt }) {
    useCopyPromptContent(prompt);

    return (
        <button
            className="prompts__item-copy card p-1"
            onClick={(event) => event.preventDefault()}
        >
            <svg>
                <use xlinkHref="#clipboard"></use>
            </svg>
        </button>
    );
}