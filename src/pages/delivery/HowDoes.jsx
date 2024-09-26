import React from "react";

const HowDoes = () => {
    const Card = ({ title = "", desc = "" }) => {
        return <div className="flex h-[100px] justify-start w-full items-start gap-x-10">
            <div className="h-full w-2 bg-custom-blue"></div>
            <div className="flex justify-start items-start flex-col gap-y-2">
                <h2 className="font-montserrat not-italic leading-normal font-medium text-[25px]">{title}</h2>
                <p className="font-montserrat not-italic leading-normal">{desc}</p>
            </div>
        </div>
    }

    const data = [
        {
            title: "Browse Info",
            desc: "Users can search and filter the food they want to order."
        },
        {
            title: "Place Order",
            desc: "Users can start placing the order."
        },
        {
            title: "Delivery Details",
            desc: "Users will fill in all the contact details and the address for delivery."
        },
        {
            title: "Payment",
            desc: "Users can choose the relevant payment option."
        },
        {
            title: "Update of Dispatch",
            desc: "Shop/Vendor will update the dispatch details of the food ordered."
        },
        {
            title: "Tracking Order",
            desc: "Real-time order tracking is available."
        },
        {
            title: "Track Delivery Partner",
            desc: "Check the delivery partner status through the app."
        },
        {
            title: "Delivery",
            desc: "Pay your delivery person via cash or other modes of payment."
        },
        {
            title: "Customer Review",
            desc: "User can review their experience regarding the delivery, food, and other things."
        },
    ]

    return <>
        <div className="py-10 px-16 flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start">
            <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">How Does Our Food Delivery Solution Work?</h2>
            <p className="font-montserrat not-italic leading-normal text-[18px]">Online food delivery app development services to deliver food to customers’ doorsteps.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-10 gap-y-12">
                { data.map((item, index) => (<Card key={index} {...item} />)) }
            </div>
        </div>
    </>
}

export default HowDoes;