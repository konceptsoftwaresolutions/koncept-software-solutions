import React from "react";
import AnimationButton from "../components/buttons/AnimationButton";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import usePath from "../hooks/usePath";

const Footer = () => {
    const path = usePath();

    return <>
        <footer className="flex justify-center items-center bg-gray-800 w-full flex-col">
            <div className="flex justify-start md:justify-around flex-col md:flex-row items-start md:items-end px-4 gap-y-4 md:px-auto py-8 nd:py-16 w-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-start gap-y-3 text-white items-start">
                        <h2 className="my-text font-light text-wrap text-[13px] sm:text-[15px]">support@konceptsoftwaresolutions.com</h2>

                        <div className="flex justify-center gap-x-2 items-center">
                            <IoCall size={16} />
                            <h2 className="my-text font-light text-[13px] sm:text-[15px]">+91 98185 25179</h2>
                        </div>

                        <a href="https://www.google.com/maps/place/Koncept+Law+Associates/@28.6916217,77.1903395,17z/data=!3m1!4b1!4m10!1m2!2m1!1s98,+Priyadarshini+Vihar,+Delhi+-+110009!3m6!1s0x390cfdf567220b29:0xa71cca2d97c4d080!8m2!3d28.6916171!4d77.1949529!15sCic5OCwgUHJpeWFkYXJzaGluaSBWaWhhciwgRGVsaGkgLSAxMTAwMDmSAQZsYXd5ZXLgAQA!16s%2Fg%2F11tf41k29q?entry=ttu" className="flex justify-center gap-x-2 items-center hover:underline hover:underline-offset-3 cursor-pointer" target="_blank">
                            <FaLocationDot size={16} />
                            <h2 className="my-text text-[13px] sm:text-[15px]">98, Priyadarshini Vihar, Delhi - 110009</h2>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center flex-col gap-y-3 sm:flex-row gap-x-4 items-center">
                    <AnimationButton onClick={() => path.navigate("/privacy-policy")}>Privacy Policy</AnimationButton>
                    <AnimationButton onClick={() => path.navigate("/tearms-and-condition")}>Terms and Condition</AnimationButton>
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-gray-900 py-4 text-white">
                <h2 className="text-white my-text font-light text-center">Copyright © 2024 - 2025. All Rights Reserved. konceptsoftwaresolutions.com | Privacy Policy</h2>
            </div>
        </footer>
    </>
}

export default Footer;