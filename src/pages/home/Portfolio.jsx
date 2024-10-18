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
            title: "Koncept Law Associates",
            text: "For Koncept Law Associates, we built a custom CRM platform that integrated client management, marketing operations, and large-scale document processing capabilities. This CRM is not just for client tracking but also manages marketing efforts and the seamless merging of 1.5 million documents, making it a comprehensive tool for legal firms. The solution automated document generation, helping the firm achieve high efficiency while minimizing human errors in handling large volumes of sensitive data. Our system supports their growing operations and ensures scalability for future needs."
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/legalpaperCrm.png?alt=media&token=cd4933ce-fc04-4b95-86f7-fd6b18e5d1f1",
            title: "LegalPapers India",
            text: "LegalPapers India acts as a bridge between the government and the people, simplifying legal and administrative processes. We developed a custom CRM system for LegalPapers India that automated their client management, service workflows, and communication. This solution helped them efficiently manage high volumes of customer requests, streamline documentation, and improve the overall speed of service delivery. Our system enabled them to handle government-related services with better accuracy and minimal manual intervention, ensuring faster resolutions for their clients."
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/sanscritiCrm.png?alt=media&token=ebd6e2a2-83dd-4b7d-8cd3-b259de28c884",
            title: "Sanscriti Electric India Pvt. Ltd.",
            text: "Sanscriti Electric India Pvt. Ltd. provides electrical services across India. They required a custom CRM system to manage their leads, track sales, and oversee operations for their large-scale services. We developed a CRM tailored to handle lead generation, follow-ups, and service execution tracking. The system helps their sales and service teams stay aligned, ensuring they can deliver reliable service to customers nationwide. With automated reminders and lead management features, their teams can now focus on delivering exceptional service without worrying about operational bottlenecks."
        }
    ]
    return <>
        <div id="portfolio" className="w-full bg-gray-50 flex flex-col justify-center items-center py-16">
            <h2 className="my-text font-medium text-[#000] text-center text-xl md:text-3xl">Successful Custom CRM and Web Development Projects</h2>
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