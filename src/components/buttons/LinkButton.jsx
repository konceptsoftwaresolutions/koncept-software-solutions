import React, { useState } from "react";

const LinkButton = ({ children, href="", active = false, onClick = function(){} }) => {
    const [Hover, setHover] = useState(false);

    return <>
        <a 
            href={href} 
            className="font-montserrat relative not-italic leading-normal font-medium"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            {children}
            <div className={`bg-custom-blue bottom-[0.5px] transition-all duration-400 ${Hover || active ? "w-full": "w-0"} absolute h-[3px]`}></div>
        </a>
    </>
}

export default LinkButton;