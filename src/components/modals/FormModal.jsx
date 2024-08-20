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
import MyModal from "./MyModal";

// validations
import { contactSchema } from "../../configs/validations";
import NumberField from "../fields/NumberField";
import MessageField from "../fields/MessageField";

const FormModal = ({ open = false, setOpen = function () { } }) => {
    const { control, formState: { errors }, handleSubmit, reset } = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            message: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data)
        if (data) {
            reset();
            setOpen(false);
        }
    }

    return <>
        <MyModal open={open} setOpen={setOpen}>
            <form className="flex flex-col  bg-white gap-y-4 lg:gap-y-8 py-5 lg:py-12 w-full rounded-3xl p-3 justify-center items-center">
                <InputField control={control} errors={errors} placeholder="Name" name="name" icon={<FaUser size={20} />} />
                <NumberField control={control} errors={errors} placeholder="Mobile No." name="mobile" icon={<IoCall size={20} />} />
                <InputField control={control} errors={errors} placeholder="Email" name="email" icon={<MdEmail size={20} />} />
                <MessageField control={control} errors={errors} placeholder="Project Details" name="details" icon={<MdMessage size={20} />} />

                <div className="w-full flex justify-center items-center">
                    <MyButton onClick={handleSubmit(onSubmit)}>
                        Submit
                    </MyButton>
                </div>

                <p className="my-text text-[15px] lg:text-[18px] font-medium">
                    <span className="text-custom-blue">
                        Note:
                    </span>
                    <span className="ml-2">
                        Your idea is 100% protected by our non disclosure agreement.
                    </span>
                </p>
            </form>
        </MyModal>
    </>
}

export default FormModal;