import React from "react";

const Flexible = () => {
    const Card = ({
        icon,
        title = "",
        text = "",
    }) => {
        return <>
            <div className="flex justify-center items-center">

            </div>
        </>
    }

    return <>
        <div className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start">
            <h2 className="font-montserrat not-italic leading-normal text-[35px]">Our Flexible Ecommerce App Development Process</h2>
            <p className="font-montserrat not-italic leading-normal text-[18px]">We combine our technological expertise with the visionary ideas and thoughts of our clients in order to provide the best mobile ecommerce application development services. Let’s have a look at our process for ecommerce mobile app development.</p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                {/* {
                    data.map(({ icon, text }, index) => {
                        return <EcommerceCard icon={icon} text={text} key={index} />
                    })
                } */}
                <Card/>
            </div>
        </div>
    </>
}

export default Flexible;