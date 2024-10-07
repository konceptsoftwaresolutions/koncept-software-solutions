import React from "react";
import { motion } from "framer-motion";

const GenX = () => {
    const Card = ({ title = "", desc = "" }) => {
        return <div className="flex h-auto xl:h-[100px] justify-start w-full items-start gap-x-10">
            <div className="h-full w-2 bg-custom-blue"></div>
            <div className="overflow-hidden">
                <motion.div
                    initial={{ x: -200, opacity: 0 }} // Start off-screen and transparent
                    whileInView={{ x: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                    transition={{ duration: 0.5 }} // Duration of the animation
                    viewport={{ once: true }} // Only animate once when in view
                    className="flex justify-start items-start flex-col gap-y-2"
                >
                    <h2 className="font-montserrat not-italic leading-normal font-medium text-[25px]">{title}</h2>
                    <p className="font-montserrat not-italic leading-normal">{desc}</p>
                </motion.div>
            </div>
        </div>
    }

    const data = [
        {
            title: "Flawless Online Ordering/ Delivery",
            desc: "Get your food delivered with just a few taps with our potential food delivery app development services.",
        },
        {
            title: "Seamless Interaction",
            desc: "Easy search, user-friendly product display, and great browsing experience to increase the interaction on the app.",
        },
        {
            title: "Real-time Tracking",
            desc: "Track and manage deliveries with real-time location tracking of the orders.",
        },
        {
            title: "Advanced Insights",
            desc: "Manage dispatch and delivery along with details of daily orders with the latest and most powerful analytics.",
        },
        {
            title: "Multiple Payment Options",
            desc: "Secure payment gateways to make it easier for the customer to make the payment easy for online food delivery."
        },
        {
            title: "Digital Marketing",
            desc: "Best digital marketing services to promote apps to online communities using Google, Facebook, Instagram, and more."
        },
    ]

    return <>
        <div className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start">
            <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">GenX Food Delivery App Development Services</h2>
            <p className="font-montserrat not-italic leading-normal text-[18px]">Offer tailored and unique food ordering app experience for every order.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-10 gap-y-12">
                {data.map((item, index) => (<Card key={index} {...item} />))}
            </div>
        </div>
    </>
}

export default GenX;