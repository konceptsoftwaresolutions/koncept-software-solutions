import React from "react";

import Lottie from "lottie-react";
import earth1 from "../assets/earth1.json";
import earth2 from "../assets/earth2.json";
import earth3 from "../assets/earth3.json";
import myEarth from "../assets/myEarth.json";

const EarthAnimation = ({
    width=1000,
    height=800
}) => {
    return <>
        <Lottie
            animationData={myEarth}
            loop={true} // Set to true to loop the animation
            autoplay={true} // Set to true to autoplay the animation
            style={{ width: width, height: height, margin: 0, padding: 0 }} // Set width and height as needed
        />
    </>
}

export default EarthAnimation;