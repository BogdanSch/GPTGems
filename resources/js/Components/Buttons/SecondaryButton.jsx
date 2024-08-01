export default function SecondaryButton({
    className = "",
    isOutline = false,
    disabled,
    children,
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
