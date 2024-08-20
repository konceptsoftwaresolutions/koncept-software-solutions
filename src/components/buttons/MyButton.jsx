import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

// icons
import { FaArrowRight } from "react-icons/fa6";

const MyButton = ({ children, onClick=function(){} }) => {
    const [isHover, setIsHover] = useState(false);
    return <>
        {/* <Button 
            className={`capitalize font-poppins not-italic leading-normal font-medium flex justify-center items-center bg-custom-blue rounded-3xl py-2 px-5 relative`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            <span>{children}</span>
            <FaArrowRight size={15} className={`ml-3 transition-all duration-300 ${Hover ? "-rotate-45": "rotate-0"}`} />
        </Button>    */}
        <Button 
            className={` text-[15px] overflow-hidden relative ${isHover? "shadow-lg border-gray-100 bg-gray-100": "shadow-md bg-custom-blue"} w-[140px] h-[40px] rounded-3xl transition-all duration-300 text-white active:scale-90 active:shadow-md`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onClick}
        >
            <div className={`font-montserrat font-medium transition-all duration-500 z-10 ${isHover ? "text-[#000]": "text-white"} flex justify-center gap-x-3 items-center not-italic absolute top-0 left-0 leading-normal w-full h-full`}>
                {children}
                <FaArrowRight size={15} className={`${isHover ? "-rotate-45": "rotate-0"}`} />
            </div>
            <div className={`bg-gray-100 transition-all duration-300 absolute top-0 left-0 ${isHover ? "w-full": "w-0"} h-full`}></div>
        </Button>
    </>
}

export default MyButton;