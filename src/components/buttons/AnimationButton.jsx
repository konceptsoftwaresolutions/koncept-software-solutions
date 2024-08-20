import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const AnimationButton = ({ children, onClick=function(){} }) => {
    const [isHover, setIsHover] = useState(false);
    return <>
        <Button 
            className={` text-[15px] overflow-hidden relative ${isHover? "shadow-lg border-gray-50 bg-gray-50": "shadow-md bg-custom-blue"} w-[180px] h-[40px] rounded-3xl transition-all duration-300 text-white active:scale-90 active:shadow-md`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onClick}
        >
            <div className={`font-montserrat font-medium transition-all duration-500 z-10 ${isHover ? "text-[#000]": "text-white"} flex justify-center items-center not-italic absolute top-0 left-0 leading-normal w-full h-full`}>
                {children}
            </div>
            <div className={`bg-gray-50 transition-all duration-300 absolute top-0 left-0 ${isHover ? "w-full": "w-0"} h-full`}></div>
        </Button>
    </>
}

export default AnimationButton;