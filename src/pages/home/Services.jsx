import React, { useState } from "react";

// icons
import { CgBrowser } from "react-icons/cg";
import { TbSettingsCode } from "react-icons/tb";
import { FaWhatsappSquare } from "react-icons/fa";

// components
import ServiceCard from "../../components/cards/ServiceCard";
import FormModal from "../../components/modals/FormModal";
import AnimationButton from "../../components/buttons/AnimationButton";

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <FormModal open={isOpen} setOpen={setIsOpen} />
        <div className="py-10 flex flex-col justify-center items-center">
            <h2 className="font-poppins not-italic text-3xl leading-normal font-medium text-[#000]">Our Core Services</h2>

            <p className="my-3 px-10 my-text font-light text-[#000] text-[16px] text-center">We understand that every business has unique digital needs. That's why we offer a comprehensive range of services designed to empower your digital transformation journey, from the ground up. Whether you're starting with a basic static website or aiming to develop a complex mobile application, we have the expertise and experience to help you achieve your goals.</p>

            <div className="grid grid-cols-3 my-10 w-full">
                <div className="flex justify-center items-center w-full">
                    <ServiceCard icon={<CgBrowser size={80} />} title="Web Design & Development" text={"At Arramton Infotech, we understand the power of mobile apps to transform your business. Whether you envision a sleek and intuitive e-commerce platform, an engaging game that keeps users hooked, or a productivity tool that streamlines workflows, our team of expert iOS and Android app developers is here to bring your vision to life."} />
                </div>

                <div className="flex justify-center items-center w-full">
                    <ServiceCard icon={<TbSettingsCode size={70} />} title="Custom Software Development" text={"One-size-fits-all software solutions can often hinder your business's growth and efficiency. That’s why, we believe in custom software development. Our team of experienced developers works closely with you to understand your unique business challenges and goals. We use agile methodologies and the latest technologies to create bespoke software solutions that perfectly align with your specific needs."} />
                </div>

                <div className="flex justify-center items-center w-full">
                    <ServiceCard icon={<FaWhatsappSquare size={70} />} title="Whatsapp Business Integration" text={"At Arramton Infotech, we understand the power of mobile apps to transform your business. Whether you envision a sleek and intuitive e-commerce platform, an engaging game that keeps users hooked, or a productivity tool that streamlines workflows, our team of expert iOS and Android app developers is here to bring your vision to life."} />
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

export default Services;