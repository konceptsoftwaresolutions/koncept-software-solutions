import React from "react";
import Introduction from "./Introduction";
import Application from "./Application";
import Features from "./Features";
import OurGrocery from "./OurGrocery";
import { Helmet } from "react-helmet-async";

const Grocery = () => {
    return <>
        <Helmet>
            <title>Grocery - Koncept Software Solutions</title>
        </Helmet>
        <div className="w-full">
            <Introduction />
            <Application />
            <Features />
            <OurGrocery />
        </div>
    </>
}

export default Grocery;