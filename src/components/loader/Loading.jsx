import React from "react";
import { Spin } from "antd";

const Loading = () => {
    return <>
        <div className="flex justify-center items-center w-full h-screen">
            <Spin />
        </div>
    </>
}

export default Loading;