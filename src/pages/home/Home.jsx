import React from "react";

// components
import Introduction from "./Introduction";
import Testimonial from "./Testimonial";
import ChooseSection from "./ChooseSection";
import Services from "./Services";

const Home = () => {
    return <>
        <main className="w-full flex flex-col">
            <Introduction />
            <Testimonial />
            <ChooseSection />
            <Services />
        </main>
    </>
}

export default Home;