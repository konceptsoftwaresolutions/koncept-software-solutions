import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// pages
const Home = lazy(() => import("../pages/home/Home"));
const PrivacyPolicy = lazy(() => import("../pages/policy/PrivacyPolicy"));
const TermsCondition = lazy(() => import("../pages/policy/TermsCondition"));

const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsCondition />} />
        </Routes>
    </>
}

export default Routing;