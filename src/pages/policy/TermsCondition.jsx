import React from "react";
import { Helmet } from "react-helmet-async";

const TearmsCondition = () => {
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

    const PT = ({ children }) => {
        return <>
            <span className="text-sm text-start pt-2 font-medium md:text-lg">{children}</span>
        </>
    }

    const B = ({ children }) => {
        return <>
            <span className="text-sm text-start font-bold md:text-lg">{children}</span>
        </>
    }

    return <>
        <Helmet>
            <title>Terms and Condition - Koncept Software Solutions</title>
        </Helmet>
        <div className="flex justify-center items-center bg-gray-50">
            <div className="w-[95%] sm:w-[90%] flex flex-col justify-start bg-white rounded-md py-8 px-4 text-center shadow-lg border border-solid border-gray-50 my-text shadow-gray-300 items-center gap-y-10 my-8">
                <Heading><span className="text-custom-blue">Terms and</span> Conditions</Heading>
                <Div>
                    <Title>Introduction</Title>
                    <P>These terms and conditions (the "Terms") govern your use of the website and mobile app development services provided by Koncept Software Solutions By using the Company's services, you agree to these Terms.</P>
                </Div>

                <Div>
                    <Title>Definitions</Title>
                    <P>For the purposes of these Terms, the following terms have the following meanings:</P>
                    <P>● "Content" means any text, images, audio, video, or other data that is uploaded, posted, or otherwise made available through the Company's services.</P>
                    <P>● "Intellectual Property Rights" means all intellectual property rights, including copyright, trademark, patent, and trade secret rights.</P>
                    <P>● "User" means any person who uses the Company's services.</P>
                </Div>

                <Div>
                    <Title>Licence to Use</Title>
                    <P>The Company grants you a non-exclusive, non-transferable, revocable licence to use the Company's services. This licence is for your personal and business use only. You may not use the Company's services for any commercial or illegal purpose.</P>
                </Div>

                <Div>
                    <Title>Acceptable Uses</Title>
                    <P>You may use the Company's services for the following purposes:</P>
                    <P>● To create and manage websites and mobile apps.</P>
                    <P>● To host and deploy websites and mobile apps.</P>
                    <P>● To access and use the Company's content.</P>
                </Div>

                <Div>
                    <PT>You may not use the Company's services for the following purposes:</PT>
                    <P>● To upload, post, or otherwise make available any Content that is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable.</P>
                    <P>● To interfere with or disrupt the Company's services.</P>
                    <P>● To violate the intellectual property rights of others.</P>
                    <P>● To spam or send unsolicited messages.</P>
                </Div>

                <Div>
                    <Title>Prohibited Behaviours</Title>
                    <P>In addition to the prohibited uses listed above, you may not engage in the following behaviours:</P>
                    <P>● Circumventing or disabling any security features of the Company's services.</P>
                    <P>● Using the Company's services to collect or store personal information about others.</P>
                    <P>● Using the Company's services to create or distribute malware or other malicious software.</P>
                </Div>

                <Div>
                    <Title>Termination and Account Suspension</Title>
                    <P>The Company may terminate your use of the Company's services at any time for any reason. The Company may also suspend your account if you violate these Terms or the Company's policies.</P>
                </Div>

                <Div>
                    <Title>Intellectual Property Rights</Title>
                    <P>The Company owns all intellectual property rights in the Company's services, including the Content. You may not use the Company's intellectual property rights without the Company's prior written permission.</P>
                </Div>

                <Div>
                    <Title>User-Generated Content</Title>
                    <P>If you upload, post, or otherwise make available any Content to the Company's services, you grant the Company a non-exclusive, royalty-free, perpetual, irrevocable, and transferable licence to use, reproduce, modify, adapt, publish, translate, distribute, and sub-licence such Content.</P>
                </Div>

                <Div>
                    <Title>Privacy Policy</Title>
                    <P>The Company's privacy policy governs the Company's collection, use, and disclosure of your personal information. You can review the Company's privacy policy at <a href="https://konceptsoftwaresolutions.com/privacypolicy">https://konceptsoftwaresolutions.com/privacypolicy</a>.</P>
                </Div>

                <Div>
                    <Title>Limitation of Liability</Title>
                    <P>The Company is not liable for any damages, including direct, indirect, incidental, consequential, or punitive damages, arising out of or in connection with your use of the Company's services.</P>
                </Div>

                <Div>
                    <Title>Disclaimers</Title>
                    <P>The Company makes no representations or warranties about the accuracy, completeness, or timeliness of the Content. The Content is provided "as is" and the Company disclaims all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.
                    </P>
                </Div>

                <Div>
                    <Title>Governing Law</Title>
                    <P>Terms are governed by and construed in accordance with the laws of the State of India.</P>
                </Div>

                <Div>
                    <Title>Changes to Terms</Title>
                    <P>The Company may modify these Terms at any time. The most current version of the Terms will be posted on the Company's website.</P>
                </Div>

                <Div>
                    <Title>Contact Information</Title>
                    <P>If you have any questions about these Terms, please contact the Company at support@konceptsoftwaresolutions.com .</P>
                </Div>

                <Div>
                    <Title>Conclusion</Title>
                    <P>By using the Company's services, you agree to these Terms. If you do not agree to these Terms, you should not use the Company's services.</P>
                </Div>
            </div>
        </div>
    </>
}

export default TearmsCondition;