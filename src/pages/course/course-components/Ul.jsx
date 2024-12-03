import React from "react";

const Ul = ({
    title = '',
    value = "",
    children
}) => {
    return <>
        <div className="flex flex-col justify-start gap-y-1 items-start">
            <h2 className="font-medium">{title}: <span className="font-semibold text-[17px]">{value}</span></h2>
            <ul className="font-medium ml-5 flex flex-col justify-start items-start gap-y-1 list-disc">
                {children}
            </ul>
        </div>
    </>
}

export default Ul;