import React from "react";
import { motion } from "framer-motion";
import MyForm from "../../components/forms/MyForm";

const Introduction = () => {
    return <>
        <div className="py-12 px-16 flex bg-gray-50 border-b-2 ecommerce-bg-image border-gray-200 justify-between items-center">
            <div className="flex flex-col w-full lg:w-1/2 justify-start py-16 gap-y-6 items-start">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="font-montserrat not-italic leading-normal font-medium text-[35px] text-gradient">Food Delivery App Development Company</h2>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="gap-y-6 flex flex-col justify-start items-start"
                >
                    <p className="font-montserrat not-italic leading-normal">
                        Are you inspired by the success of food delivery businesses like Zomato, Ubereats, or Swiggy and looking for a top food delivery app development company? Bring your food business online in this digital era.
                    </p>
                </motion.div>
            </div>
            <div className="hidden lg:flex flex-col w-1/2 justify-center items-end">
                <motion.div
                    initial={{ y: 200, opacity: 0 }} // Start off-screen and transparent
                    animate={{ y: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                    transition={{ duration: 0.5 }} // Duration of the animation
                    // viewport={{ once: true }} // Only animate once when in view
                    className="w-full flex justify-center items-center"
                >
                    <MyForm />
                </motion.div>
            </div>
        </div>
    </>
}

export default Introduction;