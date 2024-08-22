import React, { useEffect, useState } from "react";

// icons
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

// components
import LinkButton from "../components/buttons/LinkButton";
import { Drawer } from "antd";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleClose = () => setIsOpen(!isOpen);
    
    useEffect(()=> {
        if(location){
            let pathname = location.hash;
            if(pathname.match("#")){
                let getLink = pathname.split("#")[1];
                setIsActive(getLink);
            }else {
                setIsActive("home");
            }
            setIsOpen(false);
        }
    }, [location]);

    return <>
        <Drawer
            placement="left"
            onClose={handleClose}
            open={isOpen}
            width={400} // Adjust width as needed
        >
            <div className="w-full flex flex-col justify-center items-start gap-y-5">
                <LinkButton href="#home" active={isActive === "home"} onClick={() => setIsActive("home")}>
                    Home
                </LinkButton>

                <LinkButton href="#testimonial" active={isActive === "testimonial"} onClick={() => setIsActive("testimonial")}>
                    Testimonial
                </LinkButton>

                <LinkButton href="#about-us" active={isActive === "about-us"} onClick={() => setIsActive("about")}>
                    About Us
                </LinkButton>

                <LinkButton href="#portfolio" active={isActive === "portfolio"} onClick={() => setIsActive("portfolio")}>
                    Portfolio
                </LinkButton>

                <LinkButton href="#contactus" active={isActive === "contactus"} onClick={() => setIsActive("contact")}>
                    Contact Us
                </LinkButton>
            </div>
        </Drawer>
        <nav className="flex justify-center sticky z-30 top-0 left-0 bg-white border-b border-solid border-b-gray-100 shadow-sm shadow-gray-200 items-center w-full">
            <div className="justify-center hidden lg:flex w-[25%] items-center">
                <div className="flex flex-col justify-center mt-5 relative select-none items-start">
                    {/* <img src="/vite.svg" alt="logo" /> */}
                    <h2 className="font-pixelify not-italic leading-normal absolute -top-[29px] -left-[25px] select-none font-medium text-custom-blue text-[28px]">Koncept</h2>
                    <h2 className="font-pixelify not-italic leading-normal font-medium select-none text-[16px]">Software Solutions</h2>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
                <div className="w-full bg-custom-blue h-[70px] sm:h-[60px] md:h-[35px] flex justify-start items-center relative py-1 px-2 sm:px-6 text-white">
                    <div className="absolute top-0 -left-[50px] w-[50px] hidden lg:block h-full border-b-[35px] border-r-[18px] border-solid border-transparent border-r-custom-blue"></div>

                    <div className="flex justify-start gap-x-6 flex-wrap gap-y-1 items-center">
                        <h2 className="my-text text-[13px] sm:text-[15px]">support@konceptsoftwaresolutions.com</h2>

                        <div className="flex justify-center gap-x-2 items-center">
                            <IoCall size={16} />
                            <h2 className="my-text text-[13px] sm:text-[15px]">+91 98185 25179</h2>
                        </div>

                        <a href="https://www.google.com/maps/place/Koncept+Law+Associates/@28.6916217,77.1903395,17z/data=!3m1!4b1!4m10!1m2!2m1!1s98,+Priyadarshini+Vihar,+Delhi+-+110009!3m6!1s0x390cfdf567220b29:0xa71cca2d97c4d080!8m2!3d28.6916171!4d77.1949529!15sCic5OCwgUHJpeWFkYXJzaGluaSBWaWhhciwgRGVsaGkgLSAxMTAwMDmSAQZsYXd5ZXLgAQA!16s%2Fg%2F11tf41k29q?entry=ttu" className="flex justify-center gap-x-2 items-center hover:underline hover:underline-offset-3 cursor-pointer" target="_blank">
                            <FaLocationDot size={16} />
                            <h2 className="my-text text-[13px] sm:text-[15px]">98, Priyadarshini Vihar, Delhi - 110009</h2>
                        </a>
                    </div>
                </div>
                <div className="w-auto lg:w-full py-4 hidden md:flex gap-x-10 justify-start ml-10 lg:ml-0 items-center">
                    <LinkButton href="#home" active={isActive === "home"} onClick={() => setIsActive("home")}>
                        Home
                    </LinkButton>

                    <LinkButton href="#testimonial" active={isActive === "testimonial"} onClick={() => setIsActive("testimonial")}>
                        Testimonial
                    </LinkButton>

                    <LinkButton href="#about-us" active={isActive === "about-us"} onClick={() => setIsActive("about")}>
                        About Us
                    </LinkButton>

                    <LinkButton href="#portfolio" active={isActive === "portfolio"} onClick={() => setIsActive("portfolio")}>
                        Portfolio
                    </LinkButton>

                    <LinkButton href="#contactus" active={isActive === "contactus"} onClick={() => setIsActive("contact")}>
                        Contact Us
                    </LinkButton>
                </div>

                <div className="w-auto py-4 flex md:hidden gap-x-10 justify-start ml-10 lg:ml-0 items-center">
                    <button className="cursor-pointer" onClick={handleClose}>
                        <RxHamburgerMenu size={20} />
                    </button>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;