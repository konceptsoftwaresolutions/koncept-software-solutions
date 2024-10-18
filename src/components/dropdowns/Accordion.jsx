import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

const Accordion = ({
    title = "",
    text = "",
}) => {
    const [isActive, setIsActive] = useState(false);

    return <>
        <div className="w-full flex my-4 flex-col justify-center bg-gray-100 rounded-md items-center">
            <div 
                className="w-full cursor-pointer flex justify-between items-center py-2 px-3"
                onClick={() => setIsActive(!isActive)}
            >
                <h2 className="text-lg font-medium">{title}</h2>
                <button className={`text-black bg-slate-200/75 active:bg-slate-400/50 transition-all duration-300 rounded-full w-10 h-10  flex justify-center items-center shadow-none hover:shadow-none ${isActive ? "rotate-180": "rotate-0"}`}>
                    <IoIosArrowDown size={18} />
                </button>
            </div>
            <div className={`px-3 font-medium text-[16px] overflow-hidden transition-all duration-500 ${!isActive ? "h-0": "h-auto"}`}>
                <div className="w-full bg-gray-400 my-3 h-[1px]"></div>
                {text}
                <div className="pb-3"></div>
            </div>
        </div>
    </>
}

export default Accordion;