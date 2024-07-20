export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p {...props} className={`error ${className}`}>
            {message}
        </p>
    ) : null;
}
