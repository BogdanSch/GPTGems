export default function DangerButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`btn btn-outline-danger ` + className}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
