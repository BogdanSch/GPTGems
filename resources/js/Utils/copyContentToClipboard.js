const copyContentToClipboard = async (content) => {
    try {
        await navigator.clipboard.writeText(content);
        console.log("Content copied to clipboard");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

export default copyContentToClipboard;
