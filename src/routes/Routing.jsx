import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// pages
const Home = lazy(() => import("../pages/home/Home"));
const PrivacyPolicy = lazy(() => import("../pages/policy/PrivacyPolicy"));
const TermsCondition = lazy(() => import("../pages/policy/TermsCondition"));
const Ecommerce = lazy(() => import("../pages/ecommerce/Ecommerce"));
const Delivery = lazy(() => import("../pages/delivery/Delivery"));
const Grocery = lazy(() => import("../pages/grocery/Grocery"));
const LandingPage = lazy(() => import("../pages/landing/LandingPage"));

const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsCondition />} />
            <Route path="/ecommerce-app-development" element={<Ecommerce />} />
            <Route path="/grocery-app-development" element={<Grocery/>} />
            <Route path="/food-delivery-app" element={<Delivery />} />
            <Route path="/landing" element={<LandingPage />} />
        </Routes>
    </>
}

export default Routing;