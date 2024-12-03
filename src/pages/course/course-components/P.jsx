import React from "react";

const P = ({
    className = "",
    children
}) => {
    return <>
        <p className={`font-medium my-1 ${className}`}>{children}</p>
    </>
}

export default P;