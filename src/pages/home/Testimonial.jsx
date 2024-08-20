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
    return <>
        <div id="testimonial" className="flex flex-col py-20 gap-y-4 justify-center items-center">
            <h2 className="my-text text-xl md:text-3xl">Results You Can Trust</h2>
            <p className="my-text font-medium text-center text-sm md:text-lg">We’ve served more than 500+ clients globally in the last 5 years and retained 97% of them.</p>

            <div className="w-[90%]">
                <Slider {...sliderSettings}>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                </Slider>
            </div>

            {/* <div className="w-full mt-16">
                <div className="w-full">
                    <Slider {...settings}>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </Slider>
                </div>
            </div> */}
        </div>
    </>
}

export default Testimonial;