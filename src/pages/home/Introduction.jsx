import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// components
import MyForm from "../../components/forms/MyForm";

// icons
import { BsPatchCheckFill } from "react-icons/bs";
import MyButton from "../../components/buttons/MyButton";
import FormModal from "../../components/modals/FormModal";

// animations
import EarthAnimation from "../../animations/EarthAnimation";

const Introduction = () => {
    const videoRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Adjust the speed of the video here
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Set the desired speed (e.g., 0.75 for slower, 1.5 for faster)
        }
    }, []);

    return (
        <>
            <FormModal open={isOpen} setOpen={setIsOpen} />
            <div id="home" className="w-full overflow-hidden bg-gray-900 relative h-[90vh]">
                {/* Background Earth Animation */}
                <div className="absolute inset-0 -left-[160%] sm:-left-[80%] lg:-left-[70%] xl:-left-[45%] -top-20 md:-top-[120px]">
                    <EarthAnimation width={1800} height={1000} />
                </div>
                {/* Main Content */}
                <div id="contactus" className="absolute top-0 flex justify-center items-center left-0 backdrop-brightness-[0.7] h-full w-full">
                    <div className="w-full lg:w-1/2 flex justify-end items-start lg:items-center">
                        <div className="w-[95%] sm:w-[85%] flex flex-col gap-y-4 justify-start items-start">
                            <h2 className="my-text text-[22px] sm:text-[30px] lg:text-[40px] leading-[28px] sm:leading-[45px] text-white">Building Scalable iOS & Android Apps for Growth-Minded Businesses</h2>

                            <h2 className="my-text text-[18px] sm:text-lg lg:text-xl text-yellow-400">We Design, Develop & Drive Your Digital Success.</h2>

                            <div className="flex flex-col justify-start items-start gap-y-1">
                                <div className="flex justify-start items-center font-light my-text text-[12px] sm:text-[15px] lg:text-[18px] text-white gap-x-2">
                                    <BsPatchCheckFill size={18} />
                                    <span>Serving All Businesses</span>
                                </div>
                                <div className="flex justify-start items-center font-light my-text text-[12px] sm:text-[15px] lg:text-[18px] text-white gap-x-2">
                                    <BsPatchCheckFill size={18} />
                                    <span>Rapid Development & Scalability</span>
                                </div>
                                <div className="flex justify-start items-center font-light my-text text-[12px] sm:text-[15px] lg:text-[18px] text-white gap-x-2">
                                    <BsPatchCheckFill size={18} />
                                    <span>Data-Driven Strategies & Execution</span>
                                </div>
                                <div className="flex justify-start items-center font-light my-text text-[12px] sm:text-[15px] lg:text-[18px] text-white gap-x-2">
                                    <BsPatchCheckFill size={18} />
                                    <span>Ongoing Support & Maintenance</span>
                                </div>

                                <div className="my-2 flex justify-start lg:hidden items-start">
                                    <MyButton onClick={() => setIsOpen(true)}>
                                        Contact Us
                                    </MyButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:flex justify-center items-center">
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
            </div>
        </>
    );
}

export default Introduction;
