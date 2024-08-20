import React from "react";
import AnimationButton from "../components/buttons/AnimationButton";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return <>
        <footer className="flex justify-center items-center bg-gray-800 w-full flex-col">
            <div className="flex justify-around items-end py-16 w-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-start gap-y-3 text-white items-start">
                        <h2 className="my-text font-light text-[15px]">info@example.com</h2>

                        <div className="flex justify-center gap-x-2 items-center">
                            <IoCall size={16} />
                            <h2 className="my-text font-light text-[15px]">+91-8xxx-xxx-xx20</h2>
                        </div>

                        <div className="flex justify-center gap-x-2 items-center">
                            <FaLocationDot size={16} />
                            <h2 className="my-text font-light text-[15px]">98, Priyadarshini Vihar, Delhi - 110009</h2>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-x-4 items-center">
                    <AnimationButton>Privacy Policy</AnimationButton>
                    <AnimationButton>Terms and Condition</AnimationButton>
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-gray-900 py-4 text-white">
                <h2 className="text-white my-text font-light">Copyright © 2024 - 2025. All Rights Reserved. konceptsoftwaresolutions.com | Privacy Policy</h2>
            </div>
        </footer>
    </>
}

export default Footer;