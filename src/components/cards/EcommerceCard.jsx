import React from "react";

const EcommerceCard = ({
    icon,
    text = "",
}) => {
    return <>
        <div className="py-4 h-[140px] px-4 flex justify-start bg-gray-200 rounded-md items-center">
            <div className="px-4">
                {icon}
            </div>
            <div className="h-full w-[1px] mx-4 bg-gray-400"></div>
            <h2 className="font-montserrat not-italic text-[20px] font-medium leading-normal">{text}</h2>
        </div>
    </>
}

export default EcommerceCard;