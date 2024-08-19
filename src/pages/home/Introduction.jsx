import React, { useEffect, useRef } from "react";

// components
import MyForm from "../../components/forms/MyForm";

// icons
import { BsPatchCheckFill } from "react-icons/bs";

const Introduction = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Adjust the speed of the video here
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Set the desired speed (e.g., 0.75 for slower, 1.5 for faster)
        }
    }, []);

    return (
        <div className="w-full relative h-[90vh]">
            <video ref={videoRef} className="w-full h-full object-cover" src="/bgVideo.mp4" autoPlay={true} loop={true} muted="off"></video>
            {/* main */}
            <div className="absolute top-0 flex justify-center items-center left-0 backdrop-blur-[3px] backdrop-brightness-75 h-full w-full">
                <div className="w-1/2 flex justify-end items-center">
                    <div className="w-[85%] flex flex-col gap-y-4 justify-start items-start">
                        <h2 className="my-text text-3xl text-white">Building Scalable iOS & Android Apps for Growth-Minded Businesses</h2>

                        <h2 className="my-text text-xl text-yellow-400">We Design, Develop & Drive Your Digital Success.</h2>

                        <div className="flex flex-col justify-start items-start gap-y-1">
                            <div className="flex justify-start items-center font-light my-text text-[18px] text-white gap-x-2">
                                <BsPatchCheckFill size={18} />
                                <span>Serving All Businesses</span>
                            </div>
                            <div className="flex justify-start items-center font-light my-text text-[18px] text-white gap-x-2">
                                <BsPatchCheckFill size={18} />
                                <span>Rapid Development & Scalability</span>
                            </div>
                            <div className="flex justify-start items-center font-light my-text text-[18px] text-white gap-x-2">
                                <BsPatchCheckFill size={18} />
                                <span>Data-Driven Strategies & Execution</span>
                            </div>
                            <div className="flex justify-start items-center font-light my-text text-[18px] text-white gap-x-2">
                                <BsPatchCheckFill size={18} />
                                <span>Ongoing Support & Maintenance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <MyForm />
                </div>
            </div>
        </div>
    );
}

export default Introduction;
