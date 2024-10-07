import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { TbTargetArrow } from "react-icons/tb";
import { SiCssdesignawards } from "react-icons/si";
import { TbDeviceIpadCog } from "react-icons/tb";
import { TbDeviceMobileCheck } from "react-icons/tb";

import LimitText from "../../components/texts/LimitText";

const Flexible = () => {
    const Card = ({
        icon,
        title = "",
        text = "",
    }) => {
        const [isHover, setIsHover] = useState(false);

        return <>
            <div
                className="flex justify-center gap-x-6 items-center"
            // onMouseEnter={() => setIsHover(true)}
            // onMouseLeave={() => setIsHover(false)}
            >
                <div className="flex justify-center items-center w-[25%] text-custom-blue">
                    {icon}
                </div>
                <div className="overflow-hidden w-[75%]">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} // Start off-screen and transparent
                        whileInView={{ y: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                        transition={{ duration: 0.3 }} // Duration of the animation
                        viewport={{ once: true }} // Only animate once when in view
                        className="flex flex-col justify-start h-full gap-y-4 w-full items-start"
                    >
                        <h2 className="font-montserrat not-italic leading-normal font-medium text-[25px]">{title}</h2>
                        <LimitText className="font-montserrat not-italic leading-normal text-[16px]" limit={text.length} text={text} />
                    </motion.div>
                </div>
            </div>
        </>
    }

    const data = [
        {
            icon: <TbTargetArrow size={85} className="rotate-90" />,
            title: "Strategy",
            text: "Our professional team will study your business needs and requirements in-depth and work with you on the goals and trends of your business to deliver you a top-notch app to stand out from competitors in the food industry.",
        },
        {
            icon: <SiCssdesignawards size={80} />,
            title: "Design",
            text: "We will design the most unique and user-friendly UI/UX of your food delivery app development services that will also include the wireframes/layout.",
        },
        {
            icon: <TbDeviceIpadCog size={80} />,
            title: "Development",
            text: "Based on the design, a robust program is prepared by our skilled developers to offer functionality and various attributes to your online food delivery application development. With different modules, our developers will build your application and get tested by our quality assurance team.",
        },
        {
            icon: <TbDeviceMobileCheck size={80} />,
            title: "Testing and Delivery of application",
            text: "After the implementation of code into the design, the app is sent for testing to make sure the application is bug-free and ready to launch to the target audience. After this, the final product is ready to deliver to you. You can assess the app.",
        }
    ]

    return <>
        <div
            className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start"
        >
            <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Our Flexible Ecommerce App Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full my-6 gap-x-8 gap-y-12">
                {
                    data.map((item, index) => (
                        <Card
                            key={index}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    </>
}

export default Flexible;