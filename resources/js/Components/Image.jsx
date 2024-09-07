import React, { useEffect, useRef } from "react";

export default function Image({ className = "", src, ...props }) {
    const imageRef = useRef(null);

    useEffect(() => {
        const placeholderPath = `https://placehold.co/600x400`;

        function setupImage() {
            if (imageRef.current) {
                const image = imageRef.current;
                const imageSrc = image.getAttribute("src");

                image.setAttribute("data-img-src", imageSrc);
                image.setAttribute("src", placeholderPath);
            }
        }

        setupImage();

        function isInViewport(element, offset = 300) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= -offset &&
                rect.left >= -offset &&
                rect.bottom <= document.documentElement.clientHeight + offset &&
                rect.right <= document.documentElement.clientWidth + offset
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

        handleImageChange();
        window.addEventListener("scroll", handleImageChange);
    });

    return (
        <img
            ref={imageRef}
            src={src}
            className={`image ${className}`}
            {...props}
        />
    );
}
