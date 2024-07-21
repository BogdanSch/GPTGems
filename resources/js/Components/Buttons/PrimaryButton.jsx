export default function PrimaryButton({
    className = "",
    disabled,
    children,
    isOutline = false,
    ...props
}) {
    const buttonClass = isOutline ? "btn-outline-primary" : "btn-primary";
    return (
        <button
            {...props}
            className={`btn ${buttonClass} ` + className}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
