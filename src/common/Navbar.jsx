import React, { useState } from "react";

// icons
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

// components
import LinkButton from "../components/buttons/LinkButton";

const Navbar = () => {
    const [isActive, setIsActive] = useState("home");

    return <>
        <nav className="flex justify-center sticky z-30 top-0 left-0 bg-white border-b border-solid border-b-gray-100 shadow-sm shadow-gray-200 items-center w-full">
            <div className="flex justify-center w-[25%] items-center">
                <div className="flex flex-col justify-center mt-5 relative select-none items-start">
                    {/* <img src="/vite.svg" alt="logo" /> */}
                    <h2 className="font-pixelify not-italic leading-normal absolute -top-[29px] -left-[25px] select-none font-medium text-custom-blue text-[28px]">Koncept</h2>
                    <h2 className="font-pixelify not-italic leading-normal font-medium select-none text-[16px]">Software Solutions</h2>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full bg-custom-blue h-[35px] flex justify-start items-center relative py-1 px-6 text-white">
                    <div className="absolute top-0 -left-[50px] w-[50px] h-full border-b-[35px] border-r-[18px] border-solid border-transparent border-r-[#0866ff]"></div>

                    <div className="flex justify-start gap-x-6 items-center">
                        <h2 className="my-text text-[15px]">info@example.com</h2>

                        <div className="flex justify-center gap-x-2 items-center">
                            <IoCall size={16} />
                            <h2 className="my-text text-[15px]">+91-8xxx-xxx-xx20</h2>
                        </div>

                        <div className="flex justify-center gap-x-2 items-center">
                            <FaLocationDot size={16} />
                            <h2 className="my-text text-[15px]">98, Priyadarshini Vihar, Delhi - 110009</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 flex gap-x-10 justify-start items-center">
                    <LinkButton href="#" active={isActive === "home"} onClick={() => setIsActive("home")}>
                        Home                    
                    </LinkButton>

                    <LinkButton href="#" active={isActive === "testimonial"} onClick={() => setIsActive("testimonial")}>
                        Testimonial
                    </LinkButton>

                    <LinkButton href="#" active={isActive === "about"} onClick={() => setIsActive("about")}>
                        About Us
                    </LinkButton>

                    <LinkButton href="#" active={isActive === "portfolio"} onClick={() => setIsActive("portfolio")}>
                        Portfolio
                    </LinkButton>

                    <LinkButton href="#" active={isActive === "contact"} onClick={() => setIsActive("contact")}>
                        Contact Us
                    </LinkButton>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;