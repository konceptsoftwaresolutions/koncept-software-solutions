import React from "react";

const TestimonialCard = () => {
    return <>
        <div className="flex w-[280px] h-[350px] justify-start border border-solid overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 relative bg-white border-gray-300 rounded-lg shadow-md shadow-gray-300 items-start">
            <div className="bg-white h-full w-1/2"></div>
            <div className="bg-custom-blue h-full w-1/2"></div>

            <p className="my-text font-light w-full p-3 bg-white absolute h-[70%] rounded-br-[70px] top-0 left-0 text-[#000000] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi, porro aspernatur reiciendis quisquam ratione dolores fuga perspiciatis, a repellendus deserunt mollitia beatae! Corporis consequatur ut labore at et, consequuntur ...</p>

            <div className="bg-custom-blue text-white rounded-tl-[60px] w-full absolute h-[30%] bottom-0 left-0 flex justify-center py-8 items-center">
                <h2 className="my-text text-white">Hello world</h2>
            </div>
        </div>
    </>
}

export default TestimonialCard;