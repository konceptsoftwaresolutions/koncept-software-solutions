import React, { useState } from "react";

// text
import LimitText from "../texts/LimitText";

const ServiceCard = ({ icon, title="", text = "" }) => {
    const [hover, setHover] = useState(false);

    return <>
        <div className={`flex justify-start flex-col items-start border py-2 px-4 border-solid border-gray-300 hover:border-custom-blue rounded-lg w-[300px] transition-all ${hover ? "h-[500px]": "h-[350px]"}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="text-custom-blue">
                {icon}
            </div>
            <h2 className="my-text font-medium text-lg my-2 text-[#000]">{title}</h2>
            <LimitText limit={hover ? text.length : 200} text={text} />
        </div>
    </>
}

export default ServiceCard;