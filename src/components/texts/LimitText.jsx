import React from "react";

const LimitText = ({ limit = 50, text="", className="" }) => {
    return <>
        <p className={`font-poppins not-italic leading-normal text-[#000] ${className}`}>{text.length > limit ? (text.substring(0, limit) + "...") : text}</p>
    </>
}

export default LimitText;