import React from "react";

const Li = ({
    title = "",
    className = "",
    children,
}) => {
    return <>
        <li className={`font-medium text-[16px] ${className}`}><span className="font-semibold">{title}: </span>{children}</li>
    </>
}

export default Li;