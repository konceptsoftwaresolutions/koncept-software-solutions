import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePath from "../../hooks/usePath";

const LinkButton = ({ children, hash = "", to = null, active = false, onClick = function () { } }) => {
    const [Hover, setHover] = useState(false);
    const path = usePath();

    return <>
        <Link
            // href={href} 
            to={to ? `/${to}`: "/"}
            className="font-montserrat relative not-italic leading-normal font-medium"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
                if (!to) {
                    path.setHash(hash);
                    onClick();
                }
            }}
        >
            {children}
            <div className={`bg-custom-blue bottom-[0.5px] transition-all duration-400 ${Hover || active ? "w-full" : "w-0"} absolute h-[3px]`}></div>
        </Link>
    </>
}

export default LinkButton;