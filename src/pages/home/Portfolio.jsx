import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../components/arrows/Arrows";

const Portfolio = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true, // Enable auto-play
        autoplaySpeed: 2000, // Set the speed (in milliseconds) at which slides change
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false, // Disable navigation arrows
                }
            }
        ]
    };

    const data = [
        {
            url: "https://arramton.com/assets/images/landingapp/softwareswiper3.png",
            title: "Close App",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        },
        {
            url: "https://arramton.com/assets/images/landingapp/Group%2013671.jpg",
            title: "Close App",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        },
        {
            url: "https://arramton.com/assets/images/landingapp/Group%2013664.jpg",
            title: "Close App",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        }
    ]
    return <>
        <div id="portfolio" className="w-full bg-gray-50 flex flex-col justify-center items-center py-16">
            <h2 className="my-text font-medium text-[#000] text-center text-xl md:text-3xl">Our Portfolio of Successful Projects</h2>
            <p className="my-text font-medium text-[#000] text-center my-3 mx-10">Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms.</p>
            <div className="w-3/4 my-16">
                <Slider {...settings}>
                    {
                        data.map(({ text = "", title = "", url = "" }, index) => (
                            <div key={index} className="flex justify-start items-start flex-col gap-y-3">
                                <img src={url} alt="image" className="w-full h-full" />
                                <h2 className="my-text text-xl my-2">{title}</h2>
                                <p className="my-text text-[#000]">{text}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
}

export default Portfolio;