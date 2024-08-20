import React from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";
import Cards from "../../components/cards/Cards";

import Slider from "react-slick";
// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-play
        autoplaySpeed: 2000, // Set the speed (in milliseconds) at which slides change
    };
    

    return <>
        <div className="flex flex-col py-20 gap-y-4 justify-center items-center">
            <h2 className="my-text text-3xl">Results You Can Trust</h2>
            <p className="my-text font-medium text-lg">We’ve served more than 500+ clients globally in the last 5 years and retained 97% of them.</p>

            <div className="w-[90%]">
                <Slider {...settings}>
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