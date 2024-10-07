import React, { useState } from "react";

// components
import AnimationButton from "../../components/buttons/AnimationButton";
import FormModal from "../../components/modals/FormModal";
import AnimatedCount from "../../animations/AnimatedCount";

const ChooseSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <FormModal open={isOpen} setOpen={setIsOpen} />

        <div id="about-us" className="w-full py-20 px-4 flex flex-col bg-gray-100 justify-center items-center">
            <h2 className="text-lg md:text-2xl my-text font-semibold text-center text-[#000]">Why Choose Koncept Software Solutions For Your Customized Software?</h2>
            <div className="w-full flex justify-center items-center">
                <div className="w-1/2">

                </div>

                <div className="w-1/2">

                </div>
            </div>
            <div className="flex w-full justify-center my-8 items-center">
                <div className="w-[90%] py-5 border border-solid rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 sm:gap-y-3 border-blue-300">
                    <div className="flex flex-col justify-center w-full items-center">
                        <span className="my-text text-4xl text-gradient flex justify-center items-center">
                            <AnimatedCount targetNumber={20} key={"developers"} duration={1} className="my-text text-4xl text-gradient" />+
                            {/* 20+ */}
                        </span>
                        <h2 className="my-text font-medium text-[#000] text-[14px] md:text-lg">Developers</h2>
                    </div>

                    <div className="flex flex-col justify-center w-full items-center">
                        <span className="my-text text-4xl  text-gradient flex justify-center items-center">
                            <AnimatedCount targetNumber={5} key={"developers"} duration={1} className="my-text text-4xl text-gradient" />+
                            {/* 5+ */}
                        </span>
                        <h2 className="my-text font-medium text-[#000] text-[14px] md:text-lg">Years of Experience</h2>
                    </div>

                    <div className="flex flex-col justify-center w-full items-center">
                        <span className="my-text text-4xl  text-gradient flex justify-center items-center">
                            <AnimatedCount targetNumber={100} key={"developers"} duration={1} className="my-text text-4xl text-gradient" />%
                            {/* 100% */}
                        </span>
                        <h2 className="my-text font-medium text-[#000] text-[14px] md:text-lg">Client Satisfaction</h2>
                    </div>
                </div>
            </div>

            <h2 className="my-text font-semibold text-[#000] text-sm">Talk to our consultants</h2>
            <div className="w-full flex justify-center items-center my-5">
                <AnimationButton onClick={() => setIsOpen(true)}>
                    Contact Us Now
                </AnimationButton>
            </div>
        </div>
    </>
}

export default ChooseSection;