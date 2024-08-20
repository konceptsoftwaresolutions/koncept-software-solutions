import React from "react";

// icons
import { IoIosStar } from "react-icons/io";
import { CgQuote } from "react-icons/cg";

const Cards = () => {
    return <>
        <div className="flex justify-start items-center w-[280px] h-[350px]  my-10 flex-col border border-solid rounded-md border-gray-300 shadow-md shadow-gray-200 py-4 px-3 font-montserrat relative font-medium">
            <div className="rounded-full bg-blue-900 text-blue-400 z-20 flex justify-center items-center w-12 h-12 absolute -top-7 left-8">
                <CgQuote size={38} />
            </div>
            <div className="flex justify-start gap-x-1 items-center w-full text-yellow-400 my-3">
                {
                    Array(5).fill(null).map((_, index)=>(
                        <IoIosStar key={index} size={18} />
                    ))
                }
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi, porro aspernatur reiciendis quisquam ratione dolores fuga perspiciatis, a repellendus deserunt mollitia beatae! Corporis consequatur ut labore at et, consequuntur ...</p>
            <div className="bg-gray-300 my-3 w-full h-[1px]"></div>
            <h2 className="h-full w-full flex justify-start my-text font-semibold items-center">
                Manish Dudeja
            </h2>
        </div>
    </>
}

export default Cards;