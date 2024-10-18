import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    const Heading = ({ children }) => {
        return <h1 className="text-xl md:text-4xl">{children}</h1>
    }

    const Title = ({ children }) => {
        return <h2 className="text-lg font-semibold md:text-xl">{children}</h2>
    }

    const Div = ({ children }) => {
        return <>
            <div className="flex justify-center items-start w-full flex-col gap-y-1">
                {children}
            </div>
        </>
    }

    const Inline = ({ children }) => {
        return <>
            <div className=" inline-block text-start gap-x-2 w-full gap-y-1">
                {children}
            </div>
        </>
    }

    const P = ({ children }) => {
        return <>
            <span className="text-sm text-start font-medium md:text-lg">{children}</span>
        </>
    }

    const PY = ({ children }) => {
        return <>
            <span className="text-sm text-start py-4 font-medium md:text-lg">{children}</span>
        </>
    }

    const B = ({ children }) => {
        return <>
            <span className="text-sm text-start font-bold md:text-lg">{children}</span>
        </>
    }

    return <>
        <Helmet>
            <title>Privacy Policy - Koncept Software Solutions</title>
        </Helmet>
        <div className="flex justify-center items-center bg-gray-50">
            <div className="w-[95%] sm:w-[90%] flex flex-col justify-start bg-white rounded-md py-8 px-4 text-center shadow-lg border border-solid border-gray-50 my-text shadow-gray-300 items-center gap-y-10 my-8">
                <Heading><span className="text-custom-blue">Privacy</span> Policy</Heading>
                <Div>
                    <P>At Koncept Software Solutions, we are committed to protecting and upholding the privacy of both our customers and website users. This is meant to give you a basic overview of how Koncept Software Solutions will use and handle your data. Please be aware that by accessing, viewing, and using Koncept Software Solutions, you agree to the terms and conditions, policies, and practices described in this privacy statement.</P>
                </Div>

                <Div>
                    <P>This Privacy Statement describes what happens to any personal data you provide us or that we learn about you from when you visit our website. Also, we occasionally alter our Policy, so kindly review it frequently to ensure you are happy with any changes. This policy is effective from 1st Jan. 2023.</P>
                </Div>

                <Div>
                    <Title>1. What information we collect from you:</Title>
                    <P>The following information about you may be collected and processed by us while you are on our website:</P>
                    <P>* Name</P>
                    <P>* Contact information including email, phone number, email address, and other appropriate information.</P>
                    <P>* Cookies</P>
                </Div>

                <Div>
                    <Title>2. Purpose of collecting information:</Title>
                    <P>The information we collect is used for the following motive:</P>
                    <P>* to assess your goal</P>
                    <P>* to offer the solutions</P>
                    <P>* to enhance our services</P>
                    <P>* to analyze subsequent interactions</P>
                    <P>* Also, for providing information regarding payments you made.</P>
                </Div>

                <Inline>
                    <B>NOTE:</B>
                    <P>  When processing payments of any type, we DO NOT store any payment information, including your financial details, credit card, or bank account details.</P>
                </Inline>

                <Div>
                    <Title>3. Payments Details:</Title>
                    <P>* Invoices are normally sent via email, but hard copy invoices are available on request.</P>
                    <P>* Payment is due on receipt of the invoice by the Client.</P>
                </Div>

                <Div>
                    <Title>4. How do we protect your data?</Title>
                    <P>We protect the personal information you provide by adhering to generally accepted industry standards, both during transmission and once we receive it. Yet, there is only a partially safe way to transmit data over the Internet, via a mobile device, or to store it electronically. The security of any information you communicate to us, or to or from our online goods or services, cannot, therefore, be guaranteed or warranted by Koncept Software Solutions, despite our best efforts.</P>
                </Div>

                <Div>
                    <Title>5. How do we use cookies?</Title>
                    <P>Cookies are small files that give information about the computer a visitor is using. To help us improve our website, we might use cookies to collect information about your computer. We may also get data about how people generally use the Internet by using the cookie feature. As previously stated, your personal information will not be revealed by the data we save. It's merely statistical information. Also, this information in no way identifies any personal information.</P>
                    <PY>Apart from the information you choose to share with us, a cookie in no way provides us access to your computer or any other personal information about you. You have the option to accept or reject cookies. Most web browsers automatically allow cookies, however, you can usually change your browser option to deny cookies if you prefer. This can restrict you from using the website to its best potential.</PY>
                </Div>

                <Div>
                    <Title>6.How we imbibed third-party links?</Title>
                    <P> At times, we might put links to other websites on the website. You should be aware that once you utilize these links to leave our website, we no longer have any control over that other website. Since these sites are not covered by this privacy statement, we are unable to guarantee the confidentiality and privacy of any information you supply when visiting them. Be cautious and review the privacy statement that is relevant to the mentioned website.</P>
                </Div>

                <Div>
                    <Title>7. Acceptance of this privacy statements and terms</Title>
                    <P>By using the Website, you express your acceptance of our Privacy Policy and consent to collecting, using, and disseminating your information in the ways described in this policy. Please refrain from using the Website if you disagree with this privacy statement.</P>
                </Div>

                <Div>
                    <Title>8. Any Change Control Process</Title>
                    <P>As part of our project management process, we include a change control process. This will come into effect if your needs change or you find you need additional features after a website scope document has been signed off or we have moved on to the design phase of your project.</P>
                    <PY>We ask you to fill in a simple form or share via email and we assess whether the change is possible at the stage it has been requested, if it can be included as part of the website costs, or whether it will incur an extra cost. This helps to keep the project on track and within budget.</PY>
                </Div>

                <Div>
                    <Title>9. Termination</Title>
                    <P>Termination of services by the Client must be requested in a written notice and will be effective on receipt of such notice. Email or telephone requests for termination of services will not be honored until and unless confirmed in writing. The Client will be invoiced for work completed (including any expenses incurred).</P>
                </Div>

                <Div>
                    <Title>10. Cancellation fee</Title>
                    <P>A cancellation fee may be charged if the Customer cancels the Service before completion. The fee will be equal to the amount of work completed at the point of cancellation.</P>
                    <P>A non-payment of cancellation fee and/or over-due amount will result in legal action upon necessity.</P>
                </Div>

                <Div>
                    <Title>11. Statutory legal information</Title>
                    <P>Koncept Software Solutions is the Registered Name of Koncept Software Solutions Pvt. Ltd., a website and application development and digital marketing company situated in Pitampura, New Delhi at the address Plot- No 18, First Floor, Vaishali, Pitam Pura, New Delhi - 110034.</P>
                    <PY>All the information submitted by you on the website such as name, email address, and contact details won’t be sold or shared with any third party. Only the sales team and the mobile app development team use this information to contact you or send you updates about our business and projects. Sending us an email at <a target="_blank" href="https://konceptsoftwaresolutions.com">support@konceptsoftwaresolutions.com</a> will allow you to choose not to receive our communications.</PY>
                </Div>
            </div>
        </div>
    </>
}

export default PrivacyPolicy;