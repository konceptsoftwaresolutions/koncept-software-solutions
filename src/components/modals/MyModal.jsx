import React from "react";

// icons
import { RxCross2 } from "react-icons/rx";

const MyModal = ({ open = true, setOpen = function(){}, children }) => {
    const closeEvent = (e) => {
        let id = e.target.id;
        if(id === "my-modal"){
            setOpen(false);
        }
    }

    return <>
        <div className={`fixed top-0 left-0 z-50 ${open ? "w-full h-full": "w-0 h-0"}`}>
            <div
                className={`flex justify-center items-center ${open ? "w-full h-full": "w-0 h-0"} backdrop-brightness-75 backdrop-blur-[2px]`}
                id="my-modal"
                onClick={closeEvent}
            >
                {/* modal */}
                <div className={`flex flex-col justify-center overflow-hidden transition-all duration-500 ${open ? "mt-0": "-mt-96"} rounded-lg items-center w-[95%] sm:w-3/4 md:w-1/2`}>
                    <div className="bg-custom-blue flex justify-between items-center py-3 px-4 w-full">
                        <h2 className="font-poppins not-italic leading-normal font-medium text-white text-lg">Contact US</h2>
                        <button className="cursor-pointer text-white active:text-gray-200" onClick={() => setOpen(false)}>
                            <RxCross2 size={20} />
                        </button>
                    </div>
                    <div className="p-3 w-full bg-white">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MyModal;