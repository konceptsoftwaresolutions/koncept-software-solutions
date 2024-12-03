import React from "react";

const List = ({
    title = "",
    className = "",
    children,
}) => {
    return <>
        <li className={`font-medium list-none text-[16px] ${className}`}><span className="font-semibold">{title}: </span>{children}</li>
    </>
}

export default List;