import handleError from "../constants/handleErrror";
import toastify from "../constants/toastify";
import useAxios from "./useAxios";

const useRegister = () => {
    const axios = useAxios();

    // name,mobileNo,email,projectDetails
    const signup = async (payload) => {
        console.log("call signup api", payload);
        try {
            const response = await axios.post("/submit", payload);
            if(response.status === 200){
                toastify({ msg: response.data?.message });
            }
        } catch (error) {
            handleError(error);
        }
    }

    return {
        signup,
    }
}

export default useRegister;