import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { IoIosStar } from "react-icons/io";
import { CgQuote } from "react-icons/cg";
import LimitText from "../texts/LimitText";

const Cards = ({
    name = "",
    text = "",
    icon = null,
}) => {
    const [isHover, setIsHover] = useState(false);

    return <>
        <motion.div
            initial={{ y: 100, opacity: 0 }} // Start off-screen and transparent
            whileInView={{ y: 0, opacity: 1 }} // Animate to original position and fully visible when in view
            transition={{ duration: 0.3 }} // Duration of the animation
            viewport={{ once: true }} // Only animate once when in view
            className="select-none"
        >
            <div
                className={`flex justify-between select-none items-center w-[280px]  my-14 flex-col border border-solid rounded-md border-gray-300 shadow-md shadow-gray-200 py-4 px-3 font-montserrat relative font-medium transition-all  ${isHover ? "h-auto" : "h-[400px]"}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div className="rounded-full overflow-hidden bg-blue-900 text-blue-400 z-20 flex justify-center items-center w-24 h-24 absolute -top-12 right-4">
                    {/* <CgQuote size={38} /> */}
                    <img src={icon} alt="image" />
                </div>
                <div className="flex justify-start gap-x-1 items-center w-full text-yellow-400 my-3">
                    {
                        Array(5).fill(null).map((_, index) => (
                            <IoIosStar key={index} size={18} />
                        ))
                    }
                </div>
                <LimitText limit={isHover ? text.length : 230} className="text-[15px] md:text-[16px]" text={text} />
                <div className="flex flex-col justify-center items-start gap-y-2 w-full">
                    <div className="bg-gray-300 my-3 w-full h-[1px]"></div>
                    <h2 className="h-full w-full flex justify-start my-text font-semibold items-center">
                        {name}
                    </h2>
                </div>
            </div>
        </motion.div>
    </>
}

export default Cards;