import React from "react";
import { motion } from "framer-motion";

const Features = () => {
    const Card = ({ title = "", desc = "" }) => {
        return <div className="flex h-auto xl:h-[120px] justify-start w-full items-start gap-x-10">
            <div className="h-full w-2 bg-custom-blue"></div>
            <div className="overflow-hidden">
                <motion.div
                    initial={{ x: -200, opacity: 0 }} // Start off-screen and transparent
                    whileInView={{ x: 0, opacity: 1 }} // Animate to original position and fully visible when in view
                    transition={{ duration: 0.5 }} // Duration of the animation
                    viewport={{ once: true }} // Only animate once when in view
                    className="flex justify-start items-start flex-col gap-y-2"
                >
                    <h2 className="font-montserrat not-italic leading-normal font-medium text-[25px]">{title}</h2>
                    <p className="font-montserrat not-italic leading-normal">{desc}</p>
                </motion.div>
            </div>
        </div>
    }

    const data = [
        {
            title: "Account Settings",
            desc: "Customer can register themselves through their email address or mobile number. The application allows users to manage their profiles, themes, addresses, payment information, and other details in their profiles."
        },
        {
            title: "Order History",
            desc: "Order history is the record that shows the list of previous orders by the customer. The user of the application can see the details of their previous purchases.",
        },
        {
            title: "Push Notifications",
            desc: "Alert your customers with special offers, deals, price drops, order status, special occasion giveaways, and other relevant information and updates.",
        },
        {
            title: "Social Media Login",
            desc: "Allow your customers for social media login for quick and easy login to their accounts.",
        },
        {
            title: "Multiple Payment Options",
            desc: "We integrate multiple payment options to let the user pay the way they want, be it cash on delivery or UPI.",
        },
        {
            title: "Order Tracking",
            desc: "We allow our customers to track the order live and keep them notified of the current status of their orders.",
        },
        {
            title: "Feedback and Rating",
            desc: "Allow your customers to give ratings and feedback about their shopping experience",
        },
        {
            title: "Filter Option",
            desc: "We offer a filter in-app, in order to allow customers to filter the grocery products based on their needs and preferences.",
        },
        {
            title: "Re-order",
            desc: "Customer can save time by quickly repeating orders from their order history with a few taps",
        },
        {
            title: "Delivery Schedule",
            desc: "Customers will have the option to choose a suitable delivery time to receive the orders.",
        },
    ]

    const data2 = [
        {
            title: "Dashboard",
            desc: "Admin can manage all the functionalities of grocery business applications from a single dashboard.",
        },
        {
            title: "Order Management",
            desc: "Admin can manage and handle the orders through the panel. Keep a track record of sales and orders. Admin can even assign new orders to stores manually or automatically.",
        },
        {
            title: "Manage Stores",
            desc: "Our grocery app lets you manage multiple grocery stores in one place. It allows effortless management of different grocery stores.",
        },
        {
            title: "Transaction History",
            desc: "Admin can access the transaction history made in previous orders to examine. Add your payment details to the grocery app and start receiving payments for every online grocery sale.",
        },
        {
            title: "Management of Listing and Content",
            desc: "Our adaptable grocery app allows admins to create product listings, and add product pricing, quantity, and other stock details. You can even manage the content in your app with the dashboard",
        },
        {
            title: "Manage Customers",
            desc: "Through a single platform, the admin can manage all registered customers. You can access multiple customers and manage customer data regarding orders, delivery addresses, etc.",
        },
        {
            title: "Manage Offers",
            desc: "Create and manage the availability of new offers, discounts, or deals on the grocery app.",
        },
        {
            title: "Real-time Synchronization",
            desc: "Instant synchronization of data or changes made in the admin app by the customer or delivery side.",
        },
        {
            title: "Feedback",
            desc: "See what customers are saying about your grocery delivery application and services and make necessary improvements as per that.",
        },
        {
            title: "Reporting and Analytics",
            desc: "Get deeper insights and analytics to see where your business stands and how can you grow your online grocery business in a smart way.",
        },
    ]

    const data3 = [
        {
            title: "Quick Delivery",
            desc: "You can access the new, assigned orders, delivery routes over the map, push notifications, and suggestions to ensure faster delivery."
        },
        {
            title: "Multiple Delivery options",
            desc: "We allow efficient planning and delivery according to the delivery time slot of the user and can manage multiple deliveries at the same time."
        },
        {
            title: "Delivery Management",
            desc: "Enabling easy delivery management, you can manage the orders on a particular route, its time slot to plan the delivery process, and suggested delivery routes."
        },
        {
            title: "Tracking",
            desc: "Customers and admin can track the delivery status with notifications and identify the expected delivery time."
        },
        {
            title: "Customer Support and In-app calling",
            desc: "Resolve your queries related to delivery details or status. Offering the feature of in-app calling, it will allow you to be in touch with customers and grocery store owners with the app."
        },
    ]

    return <>
        <div className="flex flex-col bg-gray-50 border-b-2 gap-y-5 border-gray-200 justify-start items-start">
            <div className="py-10 px-16">
                <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Salient Features of On-demand Grocery App Development Solutions</h2>
                <p className="font-montserrat not-italic leading-normal my-3 text-[18px]">As a leading <span className="text-custom-blue font-medium">rocery app development company in India,</span> we ensure that we use the latest technologies in order to develop applications that are equipped with all the latest and necessary features and functionalities.</p>
            </div>

            <div className="w-full bg-gray-100 py-10 px-16">
                <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Customer App Features</h2>
                <p className="font-montserrat not-italic my-3 leading-normal text-[18px]">Customer application enables customers to have a hassle-free and faster shopping experience with various other advantages.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-10 gap-y-12">
                    {data.map((item, index) => (<Card key={index} {...item} />))}
                </div>
            </div>

            <div className="w-full bg-gray-100 py-10 px-16">
                <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Admin Panel Features</h2>
                <p className="font-montserrat not-italic my-3 leading-normal text-[18px]">Allow the administrator to easily control the whole application, and user details and know everything about the multiple outlets through a single app</p>
                <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-10 gap-y-12">
                    {data2.map((item, index) => (<Card key={index} {...item} />))}
                </div>
            </div>

            <div className="w-full bg-gray-100 py-10 px-16">
                <h2 className="font-montserrat not-italic leading-normal text-[35px] font-medium text-gradient">Delivery App Features</h2>
                <p className="font-montserrat not-italic my-3 leading-normal text-[18px]">We enable seamless and faster contactless delivery of products and services with management options.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-10 gap-y-12">
                    {data3.map((item, index) => (<Card key={index} {...item} />))}
                </div>
            </div>
        </div>
    </>
}

export default Features;