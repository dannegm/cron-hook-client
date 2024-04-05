export default function IconWrapper({
    children,
    size = "1.2em",
    viewBox = "0 0 256 256",
    ...props
}) {
    return (
        <svg
            height={size}
            width={size}
            viewBox={viewBox}
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            {...props}
        >
            {children}
        </svg>
    );
}
