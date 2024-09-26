import React from "react";

// comp
import EcommerceCard from "../../components/cards/EcommerceCard";

// icons
import { AiFillProduct } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { RiFindReplaceLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFileOpen } from "react-icons/md";
import { MdOutlineTransferWithinAStation } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaBuysellads } from "react-icons/fa6";
import { IoLogoGameControllerA } from "react-icons/io";
import Slider from "react-slick";

const Functions = () => {
    const data = [
        {
            icon: <AiFillProduct size={35} />,
            text: "Frontend Internet with Product Listing."
        },
        {
            icon: <CgWebsite size={35} />,
            text: "Consumer Registration and Login.",
        },
        {
            icon: <RiFindReplaceLine size={35} />,
            text: "Product Zoom-In Impact."
        },
        {
            icon: <MdOutlineShoppingCart size={35} />,
            text: "Upload to Cart",
        },
        {
            icon: <MdFileOpen size={35} />,
            text: "Upload Billing Cope.",
        },
        {
            icon: <MdOutlineTransferWithinAStation size={35} />,
            text: "Choose a Delivery Approach (COD or Online Charge).",
        },
        {
            icon: <MdAdminPanelSettings size={35} />,
            text: "Admin Dashboard",
        },
        {
            icon: <FaRegListAlt size={35} />,
            text: "Orders Control.",
        },
        {
            icon: <FaAmazonPay size={35} />,
            text: "Online Payment Gateway Integration.",
        },
        {
            icon: <TfiLayoutSlider size={35} />,
            text: "Homepage Slider Banners.",
        },
        {
            icon: <FaBuysellads size={35} />,
            text: "Cut Price and Advertising Management."
        },
        {
            icon: <IoLogoGameControllerA size={35} />,
            text: "Charge Control."
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-play
        autoplaySpeed: 2000, // Set the speed (in milliseconds) at which slides change
        arrows: false, // Disable navigation arrows
    };

    return <>
        <div className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start">
            <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Ecommerce App Development Company</h2>
            <p className="font-montserrat not-italic leading-normal text-[18px]">There are some functions of single vendor ecommerce app development. Let’s look at some of them:</p>
            <div className="grid-cols-3 hidden md:grid gap-x-5 gap-y-6">
                {
                    data.map(({ icon, text }, index) => {
                        return <EcommerceCard icon={icon} text={text} key={index} />
                    })
                }
            </div>
            <div className="w-full md:hidden gap-x-2 my-3">
                <Slider {...settings}>
                    {
                        data.map(({ icon, text }, index) => {
                            return <div className="w-full"><EcommerceCard icon={icon} text={text} key={index} /></div>
                        })
                    }
                </Slider>
            </div>
        </div>
    </>
}

export default Functions;