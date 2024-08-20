import React from "react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button
            className={`cursor-pointer absolute top-[30vh] -left-20 active:text-blue-800 hover:text-blue-600 transition-all z-10 text-custom-blue`}
            onClick={onClick}
        >
            <RiArrowLeftWideLine size={60} />
        </button>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button
            className={`cursor-pointer absolute top-[30vh] -right-20 active:text-blue-800 hover:text-blue-600 transition-all z-10 text-custom-blue`}
            onClick={onClick}
        >
            <RiArrowRightWideLine size={60} />
        </button>
    );
};

export { PrevArrow, NextArrow };
