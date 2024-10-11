import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { countries } from "../../constants/dropdown";
import { Select } from "antd";
const { Option } = Select;

import "./NumberFieldStyle.css";

/**
 * @param selectType black | white
 * @returns 
 */
const NumberField = ({
  type = "text",
  placeholder = "",
  name = "",
  icon,
  control,
  errors,
  className = "",
  selectType = "white"
}) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

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
          render={({ field: { value, onChange } }) => (
            <div className="flex justify-center items-center w-full">
              <Select
                label="Select Country"
                defaultValue={"+91"}
                onChange={e => setSelectedCountry(e)}
                className={selectType === "black" ? "w-[150px] custom-dropdown-black": "w-[150px] custom-dropdown"}
                options={countries.map((item, index) => (
                  {
                    value: item?.code,
                    label: (
                      <div key={index} className="flex items-center">
                        <img
                          src={item?.image}
                          alt={`${item?.name} map`}
                          className="w-5 h-4 mr-2"
                        />
                        <span className="ml-1">{item?.code}</span>
                      </div>
                    )
                  }
                ))}
              />
              <input
                // {...field}  // Spread field props to input
                value={value?.number}
                onChange={e => onChange({ code: selectedCountry, number: e.target.value })}
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                className={`outline-none border-b border-solid border-gray-400 placeholder-gray-500 placeholder:font-montserrat placeholder:not-italic placeholder:text-[15px] placeholder:font-medium placeholder:leading-normal font-montserrat not-italic leading-normal font-medium text-[15px] py-0.5 text-[#000] focus:placeholder-custom-blue focus:border-b-custom-blue w-full ${className} ${errors?.[name] ? "border-red-500" : ""
                  }`}
              />
            </div>
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

export default NumberField;
