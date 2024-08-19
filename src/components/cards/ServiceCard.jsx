import React from "react";

// text
import LimitText from "../texts/LimitText";

const ServiceCard = ({ icon, title="", text = "" }) => {
    return <>
        <div className="flex justify-start flex-col items-start border py-2 px-4 border-solid border-gray-300 hover:border-custom-blue rounded-lg w-[300px] h-[350px]">
            <div className="text-custom-blue">
                {icon}
            </div>
            <h2 className="my-text font-medium text-lg my-2 text-[#000]">{title}</h2>
            <LimitText limit={200} text={text} />
        </div>
    </>
}

export default ServiceCard;