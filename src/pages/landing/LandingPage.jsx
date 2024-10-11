import React from "react";
import { Helmet } from "react-helmet-async";
import InputField from "../../components/fields/InputField";
import NumberField from "../../components/fields/NumberField";
import MessageField from "../../components/fields/MessageField";
import { MdEmail, MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import MyButton from "../../components/buttons/MyButton";
import { useForm } from "react-hook-form";

// animations
import MyAnimation from "../../animations/MyAnimation";
import landingAnimation from "../../assets/landingAnimation.json";

const LandingPage = () => {
    const {
        control,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {

    }

    return <>
        <Helmet>
            <title>Landing Page - koncept software solutions</title>
        </Helmet>

        <div className="flex flex-col xl:flex-row justify-center bg-black h-auto xl:h-screen items-center w-full gap-x-4 p-5">
            <div className="w-full xl:w-1/2 flex flex-col justify-center items-center">
                <div className="text-white text-xl sm:text-2xl md:text-3xl flex flex-col w-full sm:w-[95%] xl:w-full justify-start items-center lg:text-4xl font-orbitron font-semibold leading-normal not-italic">
                    <h2 className="w-full text-start">Welcome to</h2>
                    <h2 className="w-full text-start text-custom-blue">Koncept Software Solutions</h2>
                </div>
                <form className="flex flex-col  gap-y-4 lg:gap-y-8 py-5 lg:py-12 w-full rounded-3xl sm:p-3 justify-center items-center">
                    <InputField className="bg-transparent placeholder-white border-b-white" control={control} errors={errors} placeholder="Name" name="name" icon={<FaUser size={20} />} />
                    <NumberField selectType="black" className="bg-transparent placeholder-white border-b-white" control={control} errors={errors} placeholder="Mobile No." name="mobile" icon={<IoCall size={20} />} />
                    <InputField className="bg-transparent placeholder-white border-b-white" control={control} errors={errors} placeholder="Email" name="email" icon={<MdEmail size={20} />} />
                    <MessageField className="bg-transparent placeholder-white border-b-white" control={control} errors={errors} placeholder="Project Details" name="details" icon={<MdMessage size={20} />} />

                    <div className="w-full flex justify-center items-center">
                        <MyButton onClick={handleSubmit(onSubmit)}>
                            Submit
                        </MyButton>
                    </div>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3 w-full xl:w-1/2">
                <div className="rounded-lg hidden sm:block overflow-hidden">
                    <MyAnimation
                        animationData={landingAnimation}
                        width={545}
                        height={410}
                    />
                </div>
                <div className="rounded-lg block sm:hidden overflow-hidden">
                    <MyAnimation
                        animationData={landingAnimation}
                        width={300}
                        height={210}
                    />
                </div>
                <p className="font-montserrat leading-normal not-italic font-medium text-[15px] sm:text-lg text-white">We believe in empowering businesses like yours to reach new heights.</p>
            </div>
        </div>
    </>
}

export default LandingPage;