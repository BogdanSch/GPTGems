"use strict";

const propmtItems = $(".prompts__item");
console.log(propmtItems);

propmtItems.each((index, promptItem) => {
    const propmtItemCopyButton = $(promptItem).find(".prompts__item-copy");
    const propmtItemContent = $(promptItem)
        .find(".prompts__item-text")
        .text()
        .trim();

    propmtItemCopyButton.on("click", function (event) {
        event.preventDefault();
        const copyContent = async () => {
            try {
                await navigator.clipboard.writeText(propmtItemContent);
                console.log();
                console.log("Content copied to clipboard");
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        };
        copyContent();
        propmtItemCopyButton.html(
            `<svg><use xlink:href='#clipboardChecked'></use></svg>`
        );
        setTimeout(() => {
            propmtItemCopyButton.html(
                `<svg><use xlink:href='#clipboard'></use></svg>`
            );
        }, 1500);
    });
});
