import React from "react";

const Introduction = () => {
    return <>
        <div className="py-12 px-16 flex bg-gray-50 border-b-2 ecommerce-bg-image border-gray-200 justify-between items-center">
            <div className="flex flex-col w-full lg:w-1/2 justify-start py-16 gap-y-6 items-start">
                <h2 className="font-montserrat not-italic leading-normal font-medium text-[35px] text-gradient">Food Delivery App Development Company</h2>
                <p className="font-montserrat not-italic leading-normal">
                    Are you inspired by the success of food delivery businesses like Zomato, Ubereats, or Swiggy and looking for a top food delivery app development company? Bring your food business online in this digital era.
                </p>
            </div>
            <div className="hidden lg:flex flex-col w-1/2 justify-center items-end">
            </div>
        </div>
    </>
}

export default Introduction;