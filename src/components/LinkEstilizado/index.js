import React from "react";

const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
        <p href={href} onClick={onClick} ref={ref}>
            {children}
        </p>
    );
});

export default LinkEstilizado;