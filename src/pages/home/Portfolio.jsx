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
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/konceptlawCrm.png?alt=media&token=c72a14e3-854d-485d-ae99-90da380d08fe",
            title: "Koncept Law",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/legalpaperCrm.png?alt=media&token=12ba5191-186b-4412-b1ec-1cb4a69b6b5f",
            title: "Legal Papers",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/sanskritiCrm.png?alt=media&token=084d7c46-e697-4a4c-ac8c-6d74287bd970",
            title: "Sanscriti",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        }
    ]
    return <>
        <div id="portfolio" className="w-full bg-gray-50 flex flex-col justify-center items-center py-16">
            <h2 className="my-text font-medium text-[#000] text-center text-xl md:text-3xl">Our Portfolio of Successful Projects</h2>
            <p className="my-text font-medium text-[#000] text-center my-3 mx-10">Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms.</p>
            <div className="w-3/4 my-10">
                <Slider {...settings} className="py-6">
                    {
                        data.map(({ text = "", title = "", url = "" }, index) => (
                            <div key={index} className="flex justify-start items-start flex-col gap-y-3">
                                <img src={url} alt="image" className="w-full h-[450px]" />
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