import React from "react";
import Introduction from "./Introduction";
import Company from "./Company";
import Functions from "./Functions";
import Flexible from "./Flexible";
import { Helmet } from "react-helmet-async";

const Ecommerce = () => {
    return <>
        <Helmet>
            <title>Ecommerce - Koncept Software Solutions</title>
        </Helmet>
        <div className="w-full">
            <Introduction />
            <Company />
            <Functions />
            <Flexible />
        </div>
    </>
}

export default Ecommerce;