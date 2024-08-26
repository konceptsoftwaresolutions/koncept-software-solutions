import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// pages
const Home = lazy(() => import("../pages/home/Home"));
const PrivacyPolicy = lazy(() => import("../pages/policy/PrivacyPolicy"));
const TearmsCondition = lazy(() => import("../pages/policy/TearmsCondition"));

const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/tearms-and-condition" element={<TearmsCondition />} />
        </Routes>
    </>
}

export default Routing;