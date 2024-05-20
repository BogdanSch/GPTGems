"use strict";

const propmtItems = $(".prompts__item");
const propmtContent = $(".prompts__content");

const copyContent = async (content) => {
    try {
        await navigator.clipboard.writeText(content);
        console.log();
        console.log("Content copied to clipboard");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

const getFilteredValueFromElement = (element) => {
    return element.text().trim();
};

const playAnimation = (propmtItemCopyButton) => {
    propmtItemCopyButton.html(
        `<svg><use xlink:href='#clipboardChecked'></use></svg>`
    );
    setTimeout(() => {
        propmtItemCopyButton.html(
            `<svg><use xlink:href='#clipboard'></use></svg>`
        );
    }, 1500);
};

propmtItems.each((index, promptItem) => {
    const propmtItemCopyButton = $(promptItem).find(".prompts__item-copy");
    const propmtItemContent = getFilteredValueFromElement(
        $(promptItem).find(".prompts__item-text")
    );

    propmtItemCopyButton.on("click", function (event) {
        event.preventDefault();
        copyContent(propmtItemContent);
        playAnimation(propmtItemCopyButton);
    });
});

if (propmtContent.length > 0) {
    const propmtItemCopyButton = $(".prompts__item-copy");
    const textToCopy = propmtContent.text().trim();

    propmtItemCopyButton.on("click", function (event) {
        event.preventDefault();
        copyContent(textToCopy);
        playAnimation(propmtItemCopyButton);
    });
}
