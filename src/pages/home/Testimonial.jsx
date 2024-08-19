import React from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";

const Testimonial = () => {
    return <>
        <div className="flex flex-col py-10 gap-y-4 justify-center items-center">
            <h2 className="my-text text-3xl">Results You Can Trust</h2>
            <p className="my-text font-medium text-lg">We’ve served more than 500+ clients globally in the last 5 years and retained 97% of them.</p>

            <div className="w-full grid grid-cols-3 my-4">
                <div className="w-full flex justify-center items-center">
                    <TestimonialCard />
                </div>
                <div className="w-full flex justify-center items-center">
                    <TestimonialCard />
                </div>
                <div className="w-full flex justify-center items-center">
                    <TestimonialCard />
                </div>
            </div>
        </div>
    </>
}

export default Testimonial;