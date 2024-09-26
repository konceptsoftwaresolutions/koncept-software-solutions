import React from "react";
import LimitText from "../../components/texts/LimitText";

// icons
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdMonetizationOn } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";


const Application = () => {
    const Card = ({
        icon,
        title = "",
        text = "",
    }) => {
        return <>
            <div
                className="flex justify-center gap-x-6 items-center"
            >
                <div className="flex justify-center items-center w-[25%] text-custom-blue">
                    {icon}
                </div>
                <div className="flex flex-col justify-start h-full gap-y-4 w-[75%] items-start">
                    <h2 className="font-montserrat not-italic leading-normal font-medium text-[25px]">{title}</h2>
                    <LimitText className="font-montserrat not-italic leading-normal text-[16px]" limit={text.length} text={text} />
                </div>
            </div>
        </>
    }

    const data = [
        {
            icon: <SiHomeassistantcommunitystore size={80} />,
            title: "SiHomeassistantcommunitystore",
            text: "Having a single grocery store, and wanting to sell your goods directly to your loyal grocery shoppers through application and grow your business? Get a single grocery store application for your business.",
        },
        {
            icon: <MdMonetizationOn size={80} />,
            title: "Grocery Marketplace",
            text: "We are always forward to empowering startups and aggregators with a feature-packed grocery app like BigBasket for online grocery shopping.",
        },
        {
            icon: <SiBlockchaindotcom size={80} />,
            title: "Grocery Chain",
            text: "Leverage a mobile application to provide one-stop shopping across all your groceries and manage everything from one single dashboard."
        }
    ]
    return <>
        <div className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start">
            <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Grocery Application for All Business Models</h2>
            <p className="font-montserrat not-italic leading-normal text-[18px]">At Arramton, from a basic grocery application to a customized grocery delivery application, you can find a suitable grocery delivery application for your business model. Our mobile app solutions are suitable for single grocery shop owners, wholesalers, and direct-to-customer grocery stores business models.</p>

            <p className="font-montserrat not-italic leading-normal text-[18px]">We specialize in meeting all your unique business needs with our unique grocery app solutions, be it a complex project.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-10 gap-y-12">
                {
                    data.map((item, index) => (
                        <Card
                            key={index}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    </>
}

export default Application;