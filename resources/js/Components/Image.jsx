import React from "react";

export default function Image({ className = "", src, ...props }) {
    return <img src={src} className={`image ${className}`} {...props} />;
}
