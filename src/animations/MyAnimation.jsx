import React from "react";

import Lottie from "lottie-react";

const MyAnimation = ({
    width=1000,
    height=800,
    className="",
    animationData,
    style = {}
}) => {
    return <>
        <Lottie
            animationData={animationData}
            loop={true} // Set to true to loop the animation
            autoplay={true} // Set to true to autoplay the animation
            style={{ width: width, height: height, margin: 0, padding: 0, ...style }} // Set width and height as neede1
            className={className}
        />
    </>
}

export default MyAnimation;