import React from "react";

// components
import Introduction from "./Introduction";
import Testimonial from "./Testimonial";
import ChooseSection from "./ChooseSection";
import Services from "./Services";
import Technologies from "./Technologies";
import Portfolio from "./Portfolio";
import Companies from "./Companies";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return <>
        <Helmet>
            <title>Welcome to Koncept Software Solutions</title>
        </Helmet>
        <main className="">
            <Introduction />
            <Companies />
            <Testimonial />
            <ChooseSection />
            <Services />
            <Technologies />
            <Portfolio />
        </main>
    </>
}

export default Home;