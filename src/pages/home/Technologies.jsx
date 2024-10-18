import React from "react";
import { motion } from "framer-motion";

// icons
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const Technologies = () => {
    return <>
        <div className="w-full py-20 px-4 flex flex-col bg-blue-50 justify-center items-center">
            <h2 className="text-xl md:text-3xl my-text font-medium text-center text-[#000]">Our Advanced Technology Stack for Scalable CRM and Web Solutions</h2>
            <p className="my-text text-center my-6">Our development team uses industry-leading technologies to build scalable CRM systems, websites, and mobile applications that ensure performance and security. Our stack includes HTML5, React, Node.js, MongoDB, Docker, and more.</p>

            <div className="w-full flex flex-col overflow-hidden gap-y-4 md:flex-row justify-evenly mt-8 items-center">
                <motion.div
                    initial={{ x: -150, opacity: 0 }} // Start off-screen and transparent
                    whileInView={{ x: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                    transition={{ duration: 0.3 }} // Duration of the animation
                    viewport={{ once: true }} // Only animate once when in view
                >
                    <div className="border border-solid cursor-pointer gap-y-4 hover:border-custom-blue border-gray-300 py-5 px-4 w-[300px] h-[250px] rounded-md bg-white flex flex-col justify-start items-start">
                        <FaReact size={50} className="text-custom-blue" />
                        <h2 className="my-text font-semibold text-lg text-[#000]">Front-end Technologies</h2>
                        <p className="my-text text-[16px] text-[#000000]">HTML5, CSS3, JavaScript, TypeScript, ReactJs, NextJs</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }} // Start off-screen and transparent
                    whileInView={{ y: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                    transition={{ duration: 0.3 }} // Duration of the animation
                    viewport={{ once: true }} // Only animate once when in view
                >
                    <div className="border border-solid cursor-pointer gap-y-4 hover:border-custom-blue border-gray-300 py-5 px-4 w-[300px] h-[250px] rounded-md bg-white flex flex-col justify-start items-start">
                        <FaNodeJs size={50} className="text-custom-blue" />
                        <h2 className="my-text font-semibold text-lg text-[#000]">Back-end Technologies</h2>
                        <p className="my-text text-[16px] text-[#000000]">JavaScript, Python, NodeJs</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 150, opacity: 0 }} // Start off-screen and transparent
                    whileInView={{ x: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                    transition={{ duration: 0.3 }} // Duration of the animation
                    viewport={{ once: true }} // Only animate once when in view
                >
                    <div className="border border-solid cursor-pointer gap-y-4 hover:border-custom-blue border-gray-300 py-5 px-4 w-[300px] h-[250px] rounded-md bg-white flex flex-col justify-start items-start">
                        <FaDocker size={50} className="text-custom-blue" />
                        <h2 className="my-text font-semibold text-lg text-[#000]">Others</h2>
                        <p className="my-text text-[16px] text-[#000000]">MongoDB, Jenkins, Docker.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </>
}

export default Technologies;