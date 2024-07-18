import { useEffect } from "react";

const useCopyPromptContent = (prompts) => {
    useEffect(() => {
        const copyContent = async (content) => {
            try {
                await navigator.clipboard.writeText(content);
                console.log("Content copied to clipboard");
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        };

        const getFilteredValueFromElement = (element) => {
            return element.textContent.trim();
        };

        const playAnimation = (button) => {
            button.innerHTML = `<svg><use xlink:href='#clipboardChecked'></use></svg>`;
            setTimeout(() => {
                button.innerHTML = `<svg><use xlink:href='#clipboard'></use></svg>`;
            }, 1500);
        };

        const handleClick = (event, content, button) => {
            event.preventDefault();
            copyContent(content);
            playAnimation(button);
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

        const promptContentElement =
            document.querySelector(".prompts__content-text");

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
