import React from "react";

const TopLoader = ({
    percent = 0
}) => {
    return <>
        <div
            className="h-[4px] bg-blue-600 blur-[1px] shadow-blue-600 fixed top-0 left-0 z-50"
            style={{
                width: `${percent}%`
            }}
        ></div>
    </>
}

export default TopLoader;