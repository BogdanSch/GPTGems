import React, { useEffect, useRef } from "react";

export default function Image({
    className = "",
    isSliderImage,
    src,
    ...props
}) {
    const imageRef = useRef(null);
    const PLACEHOLDER_PATH = `https://placehold.co/600x400`;

    useEffect(() => {
        if (isSliderImage) return;

        function setupImage() {
            if (imageRef.current) {
                const image = imageRef.current;
                const imageSrc = image.getAttribute("src");

                image.setAttribute("data-img-src", imageSrc);
                image.setAttribute("src", PLACEHOLDER_PATH);
            }
        }

        function isInViewport(element, scrollOffset = 300) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= -scrollOffset &&
                rect.left >= -scrollOffset &&
                rect.bottom <=
                    document.documentElement.clientHeight + scrollOffset &&
                rect.right <=
                    document.documentElement.clientWidth + scrollOffset
            );
        }

        function handleImageChange() {
            if (imageRef.current) {
                const image = imageRef.current;
                if (isInViewport(image)) {
                    const dataSrc = image.getAttribute("data-img-src");
                    if (dataSrc && image.src !== dataSrc) {
                        image.src = dataSrc;
                    }
                }
            }
        }

        setupImage();
        handleImageChange();
        window.addEventListener("scroll", handleImageChange);
    }, [isSliderImage]);

    return (
        <img
            ref={imageRef}
            src={src}
            className={`image ${className}`}
            {...props}
        />
    );
}
