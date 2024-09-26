import React from "react";

const EcommerceCard = ({
    icon,
    text = "",
}) => {
    return <>
        <div className="py-4 h-[160px] md:h-[140px] px-4 flex justify-start my-8 md:my-auto ecommerce-bg-image-hover md:bg-gray-200 bg-transparent md:hover:bg-transparent bg-custom-blue md:hover:bg-custom-blue transition-all duration-300 rounded-md items-center">
            <div className="px-4">
                {icon}
            </div>
            <div className="h-full w-[1px] mx-4 bg-gray-400"></div>
            <h2 className="font-montserrat not-italic text-[20px] font-medium leading-normal">{text}</h2>
        </div>
    </>
}

export default EcommerceCard;