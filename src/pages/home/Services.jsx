import React, { useState } from "react";

// icons
import { CgBrowser } from "react-icons/cg";
import { TbSettingsCode } from "react-icons/tb";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { BiSolidBusiness } from "react-icons/bi";

// components
import ServiceCard from "../../components/cards/ServiceCard";
import FormModal from "../../components/modals/FormModal";
import AnimationButton from "../../components/buttons/AnimationButton";

// slider
import Slider from "react-slick";
import { sliderSettings } from "../../constants/settings";

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <FormModal open={isOpen} setOpen={setIsOpen} />
        <div className="py-20 flex flex-col justify-center items-center">
            <h2 className="font-montserrat not-italic text-2xl md:text-3xl leading-normal font-medium text-[#000]">Custom CRM, Web, and Mobile Solutions for Businesses of All Sizes</h2>

            <p className="my-3 px-10 my-text text-[#000] text-[16px] text-center">We understand that every business has unique digital needs. That's why we offer a comprehensive range of services designed to empower your digital transformation journey, from the ground up. Whether you're starting with a basic static website or aiming to develop a complex mobile application, we have the expertise and experience to help you achieve your goals.</p>

            <div className="w-full flex justify-center items-center">
                <div className="my-5 w-[90%] py-5 lg:w-[95%]">
                    <Slider {...sliderSettings} className="py-5">
                        {/* for seo points -start */}
                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<FaUserCog size={80} />} title="Custom CRM Development" text={"Enhance your customer relationships with CRM solutions designed specifically for your business. Our custom-built CRMs streamline sales, automate tasks, and improve retention. Whether it’s lead management, sales tracking, or automated workflows, we deliver a system that integrates seamlessly with your operations, helping you save time and drive growth."} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<CgBrowser size={80} />} title="Web Design & Development" text={"We create SEO-friendly, responsive websites that perform across all devices. From simple business websites to full-fledged e-commerce platforms, our websites are optimized for fast loading, high visibility, and user engagement. For e-commerce, we build scalable solutions that offer smooth shopping experiences and easy product management."} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<BiSolidBusiness size={80} />} title="Enterprise Web Applications" text={"Our enterprise applications are designed for scalability and efficiency, handling high traffic and complex processes. We recently built a system capable of generating 1.5 million documents, proving our capacity for large-scale projects. Our solutions ensure security, performance, and 24x7 support, making sure your operations run smoothly."} />
                            </div>
                        </div>
                        {/* for seo points - end */}

                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<TbSettingsCode size={70} />} title="Custom Software Development" text={"One-size-fits-all software solutions can often hinder your business's growth and efficiency. That’s why, we believe in custom software development. Our team of experienced developers works closely with you to understand your unique business challenges and goals. We use agile methodologies and the latest technologies to create bespoke software solutions that perfectly align with your specific needs."} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<FaWhatsappSquare size={70} />} title="Whatsapp Business Integration" text={"At Koncept Software Solutions , we understand the power of mobile apps to transform your business. Whether you envision a sleek and intuitive e-commerce platform, an engaging game that keeps users hooked, or a productivity tool that streamlines workflows, our team of expert iOS and Android app developers is here to bring your vision to life."} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<MdOutlineAttachEmail size={70} />} title="Bulk Email Solutions" text={"At Koncept Software Solutions , we offer robust Bulk Email Solutions designed to enhance your customer communication and marketing efforts. Whether you need to send promotional emails, newsletters, or transactional updates, our platform ensures high deliverability, personalized content, and seamless integration with your CRM. With our expertise, you can scale your email marketing campaigns to reach thousands of customers efficiently, while tracking performance metrics for actionable insights."} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center items-center w-full">
                                <ServiceCard icon={<MdOutlineTextsms size={70} />} title="Bulk SMS Solutions" text={"Reach your audience instantly with Bulk SMS Solutions from Koncept Software Solutions . Our platform allows you to send large volumes of SMS messages to customers for promotions, reminders, alerts, or transactional updates. Whether it's a marketing campaign or critical communication, our Bulk SMS service ensures fast and reliable delivery with easy-to-use tools and real-time reporting, helping you engage with your customers in a more direct and personal way."} />
                            </div>
                        </div>
                    </Slider>
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