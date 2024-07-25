export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label {...props} className={`form-label ` + className}>
            {value ? value : children}
        </label>
    );
}
