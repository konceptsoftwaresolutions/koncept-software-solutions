import React from "react";
import Introduction from "./Introduction";
import GenX from "./GenX";
import HowDoes from "./HowDoes";
import Flexible from "./Flexible";

const Delivery = () => {
    return <>
        <div className="w-full">
            <Introduction />
            <GenX />
            <HowDoes />
            <Flexible />
        </div>
    </>
}

export default Delivery;