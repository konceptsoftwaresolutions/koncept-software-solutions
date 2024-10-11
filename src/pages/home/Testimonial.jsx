import React from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";
import Cards from "../../components/cards/Cards";

import Slider from "react-slick";
// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// constants
import { sliderSettings } from "../../constants/settings";

const Testimonial = () => {
    const data = [
        {
            name: "Sarah L.",
            text: "Working with Koncept Software Solutions has been a game-changer for our business. Their expertise and attention to detail helped us increase our online presence and drive more traffic to our website. We've seen a 150% increase in leads within just three months!",
        },
        {
            name: "John D.",
            text: "I can’t express how grateful I am for the outstanding service provided by Koncept Software Solutions. The team is incredibly responsive and professional. They took the time to understand our needs and delivered beyond our expectations. Our project was completed on time and within budget!",
        },
        {
            name: "Emily R.",
            text: "As a startup, we faced many challenges, but partnering with Koncept Software Solutions made all the difference. Their creative approach and innovative solutions helped us establish a strong brand identity. I highly recommend their services to anyone looking to grow their business!",
        },
        {
            name: "Rohit Sharma",
            text: "E-Commerce Platform Development Working with Koncept Software Solutions was an exceptional experience. Their team understood our business needs and delivered a scalable e-commerce platform that significantly improved our customer experience. Their attention to detail, combined with innovative solutions, helped us achieve our business goals within a tight deadline. We look forward to continuing our collaboration."
        }
    ]
    return <>
        <div id="testimonial" className="flex flex-col py-10 gap-y-4 justify-center items-center">
            <h2 className="my-text text-xl md:text-3xl">Results You Can Trust</h2>
            <p className="my-text font-medium text-center text-sm md:text-lg">We’ve served more than 500+ clients globally in the last 5 years and retained 97% of them.</p>

            <div className="w-[90%]">
                <Slider {...sliderSettings}>
                    {/* <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div> */}
                    {
                        data?.map((item, index) => (
                            <div key={index}>
                                <div className="w-full flex justify-center items-center">
                                    <Cards {...item} />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
}

export default Testimonial;