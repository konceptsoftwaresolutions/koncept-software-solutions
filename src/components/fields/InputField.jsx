import React from "react";
import { Controller } from "react-hook-form";

const InputField = ({
  type = "text",
  placeholder = "",
  name = "",
  icon,
  control,
  errors,
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <label htmlFor={name} className="px-3 cursor-pointer text-custom-blue">
        {icon}
      </label>

      {/* Wrap the input inside the Controller */}
      <div className="w-full flex flex-col justify-start items-start">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              {...field}  // Spread field props to input
              type={type}
              placeholder={placeholder}
              name={name}
              id={name}
              className={`outline-none border-b border-solid border-gray-400 placeholder-gray-500 placeholder:font-poppins placeholder:not-italic placeholder:text-[15px] placeholder:font-medium placeholder:leading-normal font-poppins not-italic leading-normal font-medium text-[15px] py-0.5 text-[#000] focus:placeholder-custom-blue focus:border-b-custom-blue w-full ${errors?.[name] ? "border-red-500" : ""
                }`}
            />
          )}
        />

        {/* Display error message if there are validation errors */}
        {errors?.[name] && (
          <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
        )}
      </div>
    </div>
  );
};

export default InputField;
