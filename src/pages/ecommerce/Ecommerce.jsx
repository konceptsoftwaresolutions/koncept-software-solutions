import React from "react";
import Introduction from "./introduction";
import Company from "./Company";
import Functions from "./Functions";

const Ecommerce = () => {
    return <>
        <div className="w-full">
            <Introduction />
            <Company />
            <Functions />
        </div>
    </>
}

export default Ecommerce;