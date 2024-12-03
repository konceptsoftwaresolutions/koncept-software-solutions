import React from "react";

const B = ({
    className = "",
    children
}) => {
    return <b className="font-semibold">{children}</b>
}

export default B;