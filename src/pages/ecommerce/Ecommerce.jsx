import React from "react";
import Introduction from "./introduction";
import Company from "./Company";
import Functions from "./Functions";
import Flexible from "./Flexible";

const Ecommerce = () => {
    return <>
        <div className="w-full">
            <Introduction />
            <Company />
            <Functions />
            <Flexible />
        </div>
    </>
}

export default Ecommerce;