import React from "react";
import { Controller } from "react-hook-form";

const MessageField = ({
  type = "text",
  placeholder = "",
  name = "",
  icon,
  control,
  errors,
  className = "",
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
            <textarea
              {...field}  // Spread field props to input
              type={type}
              placeholder={placeholder}
              name={name}
              id={name}
              className={`outline-none border-b h-7 border-solid border-gray-400 placeholder-gray-500 placeholder:font-montserrat placeholder:not-italic placeholder:text-[15px] placeholder:font-medium placeholder:leading-normal font-montserrat not-italic leading-normal font-medium text-[15px] py-0.5 text-[#000] focus:placeholder-custom-blue focus:border-b-custom-blue w-full ${className} ${errors?.[name] ? "border-red-500" : ""
                }`}
            ></textarea>
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

export default MessageField;
