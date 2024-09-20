export default function SecondaryButton({
    className = "",
    isOutline = false,
    disabled,
    children,
    isLink,
    href,
    ...props
}) {
    const buttonClass = isOutline ? "btn-outline-secondary" : "btn-secondary";
    return (
        <button
            {...props}
            className={`btn ${buttonClass} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
