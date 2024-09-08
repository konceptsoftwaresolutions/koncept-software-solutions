import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../components/arrows/Arrows";
import LimitText from "../../components/texts/LimitText";

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

    const [hover, setHover] = useState(false);

    const data = [
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/konceptlawCrm.png?alt=media&token=e1559f47-3446-410e-93ad-98ea461950d1",
            title: "Koncept Law",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/legalpaperCrm.png?alt=media&token=cd4933ce-fc04-4b95-86f7-fd6b18e5d1f1",
            title: "Legal Papers",
            text: "Every mobile app we create, whether for iOS or Android, is a stepping stone to our collective success. That's why we're your one-stop shop for custom mobile app development on both leading platforms."
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/sanscritiCrm.png?alt=media&token=ebd6e2a2-83dd-4b7d-8cd3-b259de28c884",
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
                            <div key={index}>
                                <div className="flex justify-start items-start flex-col gap-y-3"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <img src={url} alt="image" className="w-full h-[450px] rounded-md" />
                                    <h2 className="my-text text-xl my-2">{title}</h2>
                                    {/* <p className={`my-text text-[#000] mx-2 ${hover ? "h-[500px]" : "h-[350px]"}`}>{text}</p> */}
                                    <p className={`my-text transition-all duration-500 text-[#000]`}>
                                        <LimitText limit={hover ? text.length : 150} text={text} />
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
}

export default Portfolio;