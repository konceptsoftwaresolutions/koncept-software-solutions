import React from "react";
import { motion } from "framer-motion";

// Animation
import MyAnimation from "../../animations/MyAnimation";
// Assets
import ecommerceAnimation from "../../assets/ecommerce.json";

const Introduction = () => {
    return (
        <div className="py-12 px-16 flex bg-gray-50 border-b-2 ecommerce-bg-image border-gray-200 justify-between items-center">
            <div className="flex flex-col w-full lg:w-1/2 justify-start gap-y-6 items-start">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="font-montserrat not-italic leading-normal overflow-hidden font-medium text-[35px] text-gradient">
                        Ecommerce App Development Company
                    </h2>
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
                        We create a complete Ecommerce app solution that will contribute immensely to your business. Build potent, instinctive, and AI-driven Ecommerce apps with top-notch features that will push sales and revenues.
                    </p>
                    <p className="font-montserrat not-italic leading-normal">
                        Our dedicated and skilled team of professional Ecommerce app developers operates trending technologies and designs for developing applications that will provide a splendid shopping experience to your users.
                    </p>
                </motion.div>
            </div>
            <div className="hidden lg:flex flex-col w-1/2 justify-center overflow-hidden items-end">
                <motion.div
                    initial={{ x: 400 }} // Set the initial position to 200
                    animate={{ x: 0 }} // Animate to myAnimationPosition
                    transition={{ duration: 0.3 }} // Optional: add transition duration for smoothness
                >
                    <MyAnimation
                        animationData={ecommerceAnimation}
                        width={550}
                        height={450}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Introduction;
