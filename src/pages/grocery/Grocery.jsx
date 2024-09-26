import React from "react";
import Introduction from "./Introduction";
import Application from "./Application";
import Features from "./Features";
import OurGrocery from "./OurGrocery";

const Grocery = () => {
    return <>
        <div className="w-full">
            <Introduction />
            <Application />
            <Features />
            <OurGrocery />
        </div>
    </>
}

export default Grocery;