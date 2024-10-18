import React from "react";
import Accordion from "../dropdowns/Accordion";

const FAQs = () => {
    const data = [
        {
            title: "1. What services does Koncept Software Solutions offer?",
            text: "At Koncept Software Solutions, we provide a range of custom software solutions, including: Tailored CRM Systems: Designed to help businesses increase revenue and reduce expenses by streamlining customer management. Bulk Messaging Solutions: We offer bulk WhatsApp, SMS, and email services to help businesses run effective marketing campaigns. Web Development: We build SEO-friendly, responsive websites, including e-commerce platforms. Large-Scale Web Applications: We develop robust, scalable applications capable of handling massive data operations. Our recent project created over 1.5 million documents!"
        },
        {
            title: "2. What makes your CRM solutions unique?",
            text: "Our CRM solutions are fully customized to your specific business needs. Unlike one-size-fits-all software, we build CRM systems that enhance your existing workflows, helping you save time, boost revenue, and improve customer engagement. Plus, our CRM systems can scale as your business grows."
        },
        {
            title: "3. How do your bulk WhatsApp, SMS, and email solutions help businesses?",
            text: "Our bulk messaging solutions are perfect for businesses looking to re-engage existing customers or reach out to potential leads. Whether it’s for a re-marketing campaign or to inform your audience of new offers, our services allow you to connect with your customers efficiently and effectively.",
        },
        {
            title: "4. Do you provide e-commerce solutions?",
            text: "Yes! We specialize in developing e-commerce websites that are fast, secure, and fully tailored to your needs. Whether you’re launching a new online store or scaling up, we provide the tools you need to manage your store seamlessly, attract more customers, and boost sales."
        },
        {
            title: "5. What industries do you serve?",
            text: "We provide software solutions to businesses across a wide range of industries, including retail, healthcare, education, real estate, and more. Our customized approach ensures that no matter the industry, our solutions will be a perfect fit for your business."
        },
        {
            title: "6. How affordable are your services?",
            text: "We offer some of the most competitive pricing in the industry. Our business model includes transparent pricing with no hidden fees. You only pay for the development and maintenance of your project. Server deployment comes at no additional cost, and our maintenance fee is a reasonable 10-15% of the initial project cost per annum."
        },
        {
            title: "7. Do you provide support after the project is completed?",
            text: "Absolutely! We offer 24x7 developer support for all our clients. Whether you need help with ongoing maintenance or have questions about the software, we’re here to assist you around the clock."
        },
        {
            title: "8. How do I know you can handle large-scale projects?",
            text: "We’ve successfully developed enterprise-level web applications capable of managing millions of data records. For instance, we recently built a system that has created over 1.5 million documents and is continuing to scale. Our team is well-equipped to handle projects of any size or complexity."
        },
        {
            title: "9. What does PAN India service mean for your clients?",
            text: "PAN India service means we cater to businesses across all regions of India. Whether you’re in Delhi, Mumbai, Bangalore, or any other part of the country, we provide fast and reliable service, ensuring that geographical location is never a barrier to getting the best software solutions."
        },
        {
            title: "10. What’s your process for starting a new project?",
            text: "Our process begins with a free consultation where we discuss your needs and goals. Once we understand your requirements, we design a customized plan, providing full transparency on cost, timeline, and deliverables. We work closely with you throughout the development process to ensure the final product meets all your expectations."
        },
        {
            title :"11. How do you ensure transparency in your pricing?",
            text: "We believe in honest and transparent pricing. There are no hidden charges in our services, and we provide a detailed breakdown of costs upfront. Clients only need to cover the development cost, server charges (if applicable), and a nominal maintenance fee, which is clearly communicated from the start."
        }
    ]
    return <>
        <div className="py-3 w-full flex flex-col justify-center items-center text-black font-montserrat leading-normal not-italic">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Frequently Asked Questions (FAQs)</h2>
            <div className="py-4 px-10">
                {
                    data?.map((item, index) => (<Accordion key={index} {...item} />))
                }
            </div>
        </div>
    </>
}

export default FAQs;