import { useEffect } from "react";
import copyContentToClipboard from "@/Utils/copyContentToClipboard";
import playButtonAnimation from "@/Utils/playButtonAnimation";

const useCopyPromptContent = (prompts) => {
    useEffect(() => {
        const getFilteredValueFromElement = (element) => {
            return element.textContent.trim();
        };

        const handleClick = (event, content, button) => {
            event.preventDefault();
            copyContentToClipboard(content);
            playButtonAnimation(
                button,
                `<svg><use href="#clipboard"></use></svg>`,
                `<svg><use href="#clipboardChecked"></use></svg>`
            );
        };

        const promptItems = document.querySelectorAll(".prompts__item");

        if (promptItems.length > 0) {
            promptItems.forEach((promptItem) => {
                const copyButton = promptItem.querySelector(
                    ".prompts__item-copy"
                );
                const promptContent = getFilteredValueFromElement(
                    promptItem.querySelector(".prompts__item-text")
                );

                copyButton.addEventListener("click", (event) =>
                    handleClick(event, promptContent, copyButton)
                );
            });
        }

        const promptContentElement = document.querySelector(
            ".prompts__content-text"
        );

        if (promptContentElement) {
            const copyButton = document.querySelector(".prompts__item-copy");
            const textToCopy = promptContentElement.textContent.trim();

            copyButton.addEventListener("click", (event) =>
                handleClick(event, textToCopy, copyButton)
            );
        }
    }, [prompts]);
};

export default useCopyPromptContent;
