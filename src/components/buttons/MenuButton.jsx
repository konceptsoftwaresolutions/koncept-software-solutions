import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const MenuButton = ({
    children,
    onClick = function () { },
    menu,
}) => {
    const [Hover, setHover] = useState(false);
    const menuBox = (
        <Menu>
            {
                menu?.map((item, index) => (<Menu.Item key={index + 1}>
                    <Link to={`/${item?.value}`}>
                        {item?.label}
                    </Link>
                </Menu.Item>))
            }
        </Menu>
    );

    return <>
        <Dropdown
            overlay={menuBox}
            trigger={['click']}
            overlayClassName="w-[250px]"
        >
            <button
                className="font-montserrat relative not-italic leading-normal font-medium"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={onClick}
            >
                <div className="flex justify-center items-center gap-x-1.5">
                    {children}
                    <IoIosArrowDown size={16} />
                </div>
                <div className={`bg-custom-blue bottom-[0.5px] transition-all duration-400 ${Hover ? "w-full" : "w-0"} absolute h-[3px]`}></div>
            </button>
        </Dropdown>
    </>
};

export default MenuButton;
