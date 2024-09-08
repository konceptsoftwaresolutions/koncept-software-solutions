import React from "react";

// icons
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const Technologies = () => {
    return <>
        <div className="w-full py-20 px-4 flex flex-col bg-blue-50 justify-center items-center">
            <h2 className="text-xl md:text-3xl my-text font-medium text-center text-[#000]">Technology and Development Stack</h2>
            <p className="my-text text-center my-6">We Are An Expert Software Development Company And Use The Best Technologies And Platforms To Deliver High-Quality Products.</p>

            <div className="w-full flex flex-col gap-y-4 md:flex-row justify-evenly mt-8 items-center">
                <div className="border border-solid cursor-pointer gap-y-4 hover:border-custom-blue border-gray-300 py-5 px-4 w-[300px] h-[250px] rounded-md bg-white flex flex-col justify-start items-start">
                    <FaReact size={50} className="text-custom-blue" />
                    <h2 className="my-text font-semibold text-lg text-[#000]">Front-end Technologies</h2>
                    <p className="my-text text-[16px] text-[#000000]">HTML5, CSS3, JavaScript, TypeScript, ReactJs, NextJs</p>
                </div>

                <div className="border border-solid cursor-pointer gap-y-4 hover:border-custom-blue border-gray-300 py-5 px-4 w-[300px] h-[250px] rounded-md bg-white flex flex-col justify-start items-start">
                    <FaNodeJs size={50} className="text-custom-blue" />
                    <h2 className="my-text font-semibold text-lg text-[#000]">Back-end Technologies</h2>
                    <p className="my-text text-[16px] text-[#000000]">JavaScript, Python, NodeJs</p>
                </div>

                <div className="border border-solid cursor-pointer gap-y-4 hover:border-custom-blue border-gray-300 py-5 px-4 w-[300px] h-[250px] rounded-md bg-white flex flex-col justify-start items-start">
                    <FaDocker size={50} className="text-custom-blue" />
                    <h2 className="my-text font-semibold text-lg text-[#000]">Others</h2>
                    <p className="my-text text-[16px] text-[#000000]">MongoDB, Jenkins, Docker.</p>
                </div>
            </div>
        </div>
    </>
}

export default Technologies;