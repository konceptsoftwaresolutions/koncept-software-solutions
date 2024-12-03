import React from "react";

const Point = ({
    point = 1,
    title = '',
    children
}) => {
    return <>
        <div className="flex gap-x-2 font-medium justify-start items-start">
            <h2>{point}.</h2>
            <p>
                <h2 className="font-semibold text-[17px]">{title}:</h2>
                {children}
            </p>
        </div>
    </>
}

export default Point;