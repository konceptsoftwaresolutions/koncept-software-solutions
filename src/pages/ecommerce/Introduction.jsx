import React from "react";

// animation
import MyAnimation from "../../animations/MyAnimation";
// assets
import ecommerceAnimation from "../../assets/ecommerce.json";

const Introduction = () => {
    return <>
        <div className="py-12 px-16 flex bg-gray-50 border-b-2 ecommerce-bg-image border-gray-200 justify-between items-center">
            <div className="flex flex-col w-full lg:w-1/2 justify-start gap-y-6 items-start">
                <h2 className="font-montserrat not-italic leading-normal font-medium text-[35px] text-gradient">Ecommerce App Development Company</h2>
                <p className="font-montserrat not-italic leading-normal">
                    We create a complete Ecommerce app solution that will contribute immensely to your business. Build potent, instinctive, and AI-driven Ecommerce apps with top-notch features that will push sales and revenues.
                </p>
                <p className="font-montserrat not-italic leading-normal">
                    Our dedicated and skilled team of professional Ecommerce app developers operates trending technologies and designs for developing applications that will provide a splendid shopping experience to your users
                </p>
            </div>
            <div className="hidden lg:flex flex-col w-1/2 justify-center items-end">
                <MyAnimation
                    animationData={ecommerceAnimation}
                    width={550}
                    height={450}
                />
            </div>
        </div>
    </>
}

export default Introduction;