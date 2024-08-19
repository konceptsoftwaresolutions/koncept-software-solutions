import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// icons
import { FaUser } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";

// fields
import InputField from "../fields/InputField";

// components
import MyButton from "../buttons/MyButton";

// validations
import { contactSchema } from "../../configs/validations";

const MyForm = () => {
    const { control, formState: {errors}, handleSubmit, reset } = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            message: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        if(data){
            reset();
        }
    }

    return <>
        <form className="flex flex-col w-3/4 bg-white gap-y-8 py-12 border-2 border-solid border-custom-blue rounded-xl p-3 justify-center items-center">
            <InputField control={control} errors={errors} placeholder="Name" name="name" icon={<FaUser size={20} />} />
            <InputField control={control} errors={errors} placeholder="Mobile No." name="mobile" icon={<IoCall size={20} />} />
            <InputField control={control} errors={errors} placeholder="Email" name="email" icon={<MdEmail size={20} />} />
            <InputField control={control} errors={errors} placeholder="Message" name="message" icon={<MdMessage size={20} />} />

            <div className="w-full flex justify-center items-center">
                <MyButton onClick={handleSubmit(onSubmit)}>
                    Submit
                </MyButton>    
            </div>
        </form>
    </>
}

export default MyForm;