import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

// icons
import { FaArrowRight } from "react-icons/fa6";

const MyButton = ({ children, onClick=function(){} }) => {
    const [Hover, setHover] = useState(false);
    return <>
        <Button 
            className={`capitalize font-poppins not-italic leading-normal font-medium flex justify-center items-center bg-custom-blue rounded-3xl py-2 px-5 relative`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            <span>{children}</span>
            <FaArrowRight size={15} className={`ml-3 transition-all duration-300 ${Hover ? "-rotate-45": "rotate-0"}`} />
        </Button>   
    </>
}

export default MyButton;