import React from "react";

const OurGrocery = () => {
    const Card = ({ title = "", desc = "", num = 1 }) => {
        return <>
            <div className="bg-gray-100 overflow-hidden rounded-md shadow-md shadow-gray-200">
                <div className="px-6 py-6 flex wave2 h-[350px] flex-col justify-start items-start font-montserrat not-italic leading-normal rounded-md">
                    <div className="p-3 rounded-md bg-custom-blue px-6 shadow-md text-white shadow-blue-900  py-2 text-[30px]">{num}</div>

                    <h2 className="text-[25px] mt-6 mb-3 font-medium">{title}</h2>
                    <p className="text-[16px] font-medium">{desc}</p>
                </div>
            </div>
        </>
    }

    const data = [
        {
            title: "Planning",
            desc: "At the initial stage our team of highly skilled professionals will gather all the information and your requirements and ideas related to the project from the client by doing in-depth market research. Based on that, we will plan everything for your business."
        },
        {
            title: "Design",
            desc: "We will design the most unique and user-friendly UI/UX of your grocery mobile app that will also include the wireframes."
        },
        {
            title: "Development",
            desc: "Based on the design, a robust program is prepared by our skilled developers to offer functionality and various attributes to your online grocery mobile application. With different modules, our developers will build your application and get tested by our quality assurance team."
        },
        {
            title: "Testing and Delivery of application",
            desc: "After the implementation of code into the design, the app is sent for testing to make sure the application is bug-free and ready to launch to the target audience. After this, the final product is ready to deliver to you. You can assess the app."
        },
    ]

    return <>
        <div className="flex justify-center bg-white text-[#000000] items-center flex-col py-10 px-16">
            <h2 className="font-montserrat not-italic leading-normal font-medium my-4 text-[30px]">Our Grocery App Development Process</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 my-8 gap-x-5 gap-y-10">
                {data.map((item, index) => (<Card key={index} {...item} num={index + 1} />))}
            </div>
        </div>
    </>
}

export default OurGrocery;