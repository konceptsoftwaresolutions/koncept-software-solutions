import React from "react";
import Introduction from "./Introduction";
import GenX from "./GenX";
import HowDoes from "./HowDoes";
import Flexible from "./Flexible";
import { Helmet } from "react-helmet-async";

const Delivery = () => {
    return <>
        <Helmet>
            <title>Delivery - Koncept Software Solutions</title>
        </Helmet>
        <div className="w-full">
            <Introduction />
            <GenX />
            <HowDoes />
            <Flexible />
        </div>
    </>
}

export default Delivery;