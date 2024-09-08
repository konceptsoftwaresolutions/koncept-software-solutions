import React from "react";
import { sliderSettings } from "../../constants/settings";
// Import Slick slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Companies = () => {
    // Image URLs
    const konceptlawImage = "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/konceptlawImage.png?alt=media&token=8117bb92-a447-4102-848b-2b370adb5852";
    const legalpapersImage = "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/legalpapersImage.png?alt=media&token=5242ecd6-f252-46ef-b253-d8223fd7fc4a";
    const sanskritiImage = "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/sanscritiImage.png?alt=media&token=f4874f8a-d9c4-43d1-9538-be01f8960f0d";
    const omegaImage = "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/omegaImage.png?alt=media&token=2330a259-4abb-428b-b624-7f9afb9c7c57";
    const sgpsImage = "https://firebasestorage.googleapis.com/v0/b/backendtest-f4147.appspot.com/o/sgpsImage.png?alt=media&token=fd10a187-0c25-4a31-8170-dd64a3a8c530";

    // Reusable Div component with customizable width
    const Div = ({ children, width = "" }) => {
        return (
            <div
                className={`flex justify-center items-center bg-gray-100 border-gray-200 border-2 border-solid py-2 px-3 h-[70px] ${width || "w-[230px]"
                    }`}
            >
                {children}
            </div>
        );
    };

    const modifiedSliderSettings = { ...sliderSettings, dots: false };

    return (
        <div className="w-full py-10">
            <Slider {...modifiedSliderSettings} className="w-full py-5">
                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-full flex justify-center items-center">
                        <Div>
                            <img
                                src={legalpapersImage}
                                alt="Legal Papers"
                                className="max-w-full max-h-full object-contain"
                            />
                        </Div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-full flex justify-center items-center">
                        <Div width="w-[350px]">
                            <div className="flex items-center gap-2 select-none">
                                <div className="w-[3.5rem] h-[2.5rem] flex">
                                    <img
                                        src={konceptlawImage}
                                        alt="Koncept Law Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-bold konceptlaw-logo-color">
                                        Koncept Law Associates
                                    </p>
                                </div>
                            </div>
                        </Div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-full flex justify-center items-center">
                        <Div>
                            <img
                                src={sanskritiImage}
                                alt="Sanskriti"
                                className="max-w-full max-h-full object-contain"
                            />
                        </Div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-full flex justify-center items-center">
                        <Div>
                            <img
                                src={omegaImage}
                                alt="Omega"
                                className="max-w-full max-h-full object-contain"
                            />
                        </Div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-full flex justify-center items-center">
                        <Div>
                            <img
                                src={sgpsImage}
                                alt="SGPS"
                                className="max-w-full max-h-full object-contain"
                            />
                        </Div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Companies;
