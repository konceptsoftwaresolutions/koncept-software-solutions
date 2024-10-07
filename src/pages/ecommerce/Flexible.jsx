import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { ImSearch } from "react-icons/im";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrDeploy } from "react-icons/gr";

import LimitText from "../../components/texts/LimitText";

const Flexible = () => {
    const Card = ({
        icon,
        title = "",
        text = "",
    }) => {
        const [isHover, setIsHover] = useState(false);

        return <>
            <motion.div
                initial={{ x: -100, opacity: 0 }} // Start off-screen and transparent
                whileInView={{ x: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                transition={{ duration: 0.3 }} // Duration of the animation
                viewport={{ once: true }} // Only animate once when in view
            >
                <div
                    className="flex justify-center gap-x-6 items-center"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div className="flex justify-center items-center w-[25%] text-custom-blue">
                        {icon}
                    </div>
                    <div className="flex flex-col justify-start h-full gap-y-4 w-[75%] items-start">
                        <h2 className="font-montserrat not-italic leading-normal font-medium text-[25px]">{title}</h2>
                        <LimitText className="font-montserrat not-italic leading-normal text-[16px]" limit={!isHover ? 160 : text.length} text={text} />
                    </div>
                </div>
            </motion.div>
        </>
    }

    const data = [
        {
            icon: <ImSearch size={110} className="rotate-90" />,
            title: "Discovery",
            text: "Being the best and most highly rated ecommerce app development company (Single Vendor), our ecommerce app development process begins with discovering the market fit for our client’s ecommerce app idea. We cautiously examine the landscape for identical offerings and build the best technology that will meet your specific needs and requirements.",
        },
        {
            icon: <TbDeviceDesktopCog size={125} />,
            title: "Development and Testing",
            text: "In the third stage of the development process, we begin to develop the apps, create the required elements and APIs and effortlessly combine the parts together that can come alive as a stunning and attractive ecommerce app. After the development process is complete, we start testing the app, if it requires any modifications or changes or not. This way, our development and testing phase gets complete.",
        },
        {
            icon: <HiOutlineLightBulb size={140} />,
            title: "Ideation",
            text: "The next step comes the ‘Ideation’ in our online shopping application development procedure where we design the solution for an ecommerce app. In this step, we do the best UI/UX elements that will cater to your user’s needs and requirements and design cautious user journeys that will boost conversions.",
        },
        {
            icon: <GrDeploy size={110} />,
            title: "Deployment and Maintenance",
            text: "In the last stage of the ecommerce mobile app development process, we deploy the application or software on its planned platform and based on the feedback from the priority groups and paired, we upgrade, maintain and handle the application for the best and desired results.",
        }
    ]

    return <>
        <div
            className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start"
        >
            <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Our Flexible Ecommerce App Development Process</h2>
            <p className="font-montserrat not-italic leading-normal text-[18px]">We combine our technological expertise with the visionary ideas and thoughts of our clients in order to provide the best mobile ecommerce application development services. Let’s have a look at our process for ecommerce mobile app development.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full my-6 gap-x-8 gap-y-10">
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