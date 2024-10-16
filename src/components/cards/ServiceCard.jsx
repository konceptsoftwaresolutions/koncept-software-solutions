import React, { useState } from "react";
import { motion } from "framer-motion";

// text
import LimitText from "../texts/LimitText";

const ServiceCard = ({ icon, title = "", text = "" }) => {
    const [hover, setHover] = useState(false);

    return <>
        <motion.div
            initial={{ y: 100, opacity: 0 }} // Start off-screen and transparent
            whileInView={{ y: 0, opacity: 1 }} // Animate to original position and fully visible when in view
            transition={{ duration: 0.3 }} // Duration of the animation
            viewport={{ once: true }} // Only animate once when in view
        >
            <div className={`flex justify-start flex-col items-start border py-2 px-4 border-solid border-gray-300 hover:border-custom-blue rounded-lg w-[300px] transition-all duration-500 ${hover ? "h-[560px]" : "h-[380px]"}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="text-custom-blue">
                    {icon}
                </div>
                <h2 className="my-text font-medium text-lg my-2 text-[#000]">{title}</h2>
                <LimitText limit={hover ? text.length : 200} text={text} />
            </div>
        </motion.div>
    </>
}

export default ServiceCard;