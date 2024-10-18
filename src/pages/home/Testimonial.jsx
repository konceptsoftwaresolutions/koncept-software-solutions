import React from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";
import Cards from "../../components/cards/Cards";

import Slider from "react-slick";
// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// constants
import { sliderSettings } from "../../constants/settings";

import legalpapersDP from "../../assets/legalpapersDP.jpg";
import mgrDP from "../../assets/mgrDP.jpg";
import sgpsDP from "../../assets/sgpsDP.jpg";
import ritikDP from "../../assets/ritikDP.jpg";
import yugantDP from "../../assets/yugantDP.jpg";
import niketDP from "../../assets/niketDP.jpg";
import kamalSirDP from "../../assets/kamalSirDP.jpg";

const Testimonial = () => {
    const data = [
        {
            name: <span>Mr. Pradeep Gupta, <br/> CEO, LegalPapers India</span>,
            text: "Working with this team has been a fantastic experience. They developed a custom software solution for our organization that helped streamline our operations and significantly reduce manual tasks. Their attention to detail, timely delivery, and commitment to quality have been remarkable. I highly recommend their services for any large-scale government project.",
            icon: legalpapersDP,
        },
        {
            name: <span>Mr. Kamal Bahl, <br/> CEO, Koncept Law Associates</span>,
            text: "Koncept Software Solutions delivered a fantastic solution that automates the merging of over 1.5 million legal notices for our firm. The system is efficient, reliable, and has significantly streamlined our document management process. Their team's technical expertise and ongoing support have been exceptional, making a real difference in our operations.",
            icon: kamalSirDP,
        },
        {
            name: <span>Mr. Mohan, <br/> MD, MGR Sales and Solutions</span>,
            text: "We needed a CRM system that could handle our complex customer management needs, and Koncept Software Solutions delivered exactly that. Their expert developers crafted a solution that streamlined our processes and improved our overall efficiency. What truly sets them apart, however, is their round-the-clock developer support. No matter the time, their team in Delhi has been there to provide quick resolutions to any issues that arise. It's a partnership we can rely on.",
            icon: mgrDP,
        },
        {
            name: <span>Mr. Abhishek Tripathi, <br/> CEO, SAKET GRAMODYOG PRASHIKSHAN SANSTHAN</span>,
            text: "Working with Koncept Software Solutions to develop our custom CRM has been a great experience. The team in Delhi was dedicated to building a solution that perfectly matched our business requirements. Our sales team is now more organized, and we've seen a significant increase in productivity and customer satisfaction. They continue to provide excellent support post-launch, ensuring everything runs smoothly. We highly recommend them for CRM solutions.",
            icon: sgpsDP,
        },
        {
            name: <span>Mr. Ritik Sadh, <br/> CEO, Stellamoon Clothing</span>,
            text: "Koncept Software Solutions exceeded our expectations with a beautifully designed, functional website that fit perfectly within our budget. Their developers in Delhi provided constant support throughout the project, making adjustments whenever needed and ensuring that everything ran smoothly. The combination of affordability and top-tier developer support makes them the ideal web development partner for any business.",
            icon: ritikDP,
        },
        {
            name: <span>Mr. Yugant Solanki, <br/> Co-founder, Jikoo Motors</span>,
            text: "We are incredibly grateful to Koncept Software Solutions for the outstanding work they did on our CRM and website. From the start, Dipesh and the team were fully dedicated to understanding our vision for Jikoo Motors. Their professionalism and responsiveness, no matter the time of day, made all the difference.",
            icon: yugantDP,
        },
        {
            name: <span>Mr. Niket, <br/> CEO, Ellora Arts</span>,
            text: "We approached Koncept Software Solutions for a website that would showcase our jean products and help us connect with more customers. They delivered a fantastic site that not only looks great but also fits perfectly within our budget. The developers were supportive throughout the process, always available to make adjustments and provide advice. Their service is both professional and budget-friendly, making it easy for a small business like ours to succeed online.",
            icon: niketDP,
        },
    ]
    return <>
        <div id="testimonial" className="flex flex-col py-10 gap-y-4 justify-center items-center">
            <h2 className="my-text text-xl md:text-3xl">Proven Success: Trusted by 50+ Businesses Across India</h2>
            <p className="my-text font-medium text-center text-sm md:text-lg">We’ve served more than 500+ clients globally in the last 5 years and retained 97% of them.</p>

            <div className="w-[90%]">
                <Slider {...sliderSettings}>
                    {/* <div>
                        <div className="w-full flex justify-center items-center">
                            <Cards />
                        </div>
                    </div> */}
                    {
                        data?.map((item, index) => (
                            <div key={index}>
                                <div className="w-full flex justify-center items-center">
                                    <Cards {...item} />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
}

export default Testimonial;