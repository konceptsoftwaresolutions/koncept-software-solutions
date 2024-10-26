import React from "react";
import { TypeAnimation } from "react-type-animation";

const AutoType = ({ text = "We produce food for Mice", className = "", speed = 100 }) => { // Set default speed to 50ms
    return (
        <TypeAnimation
            sequence={[
                text, // The single text to type out
                1000, // Wait 1s after typing
            ]}
            wrapper="span"
            speed={speed} // Use the passed speed prop
            className={`${className}`} // Combine default class with user-defined class
            repeat={false} // Set repeat to false to run only once
            cursor={false} // Set cursor visibility
        />
    );
}

export default AutoType;
