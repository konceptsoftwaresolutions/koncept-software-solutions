import React from "react";

const Heading = ({
    className = '',
    children
}) => {
    return <>
        <h1 className={`font-semibold text-[22px] ${className}`}>{children}</h1>
    </>
}

export default Heading;