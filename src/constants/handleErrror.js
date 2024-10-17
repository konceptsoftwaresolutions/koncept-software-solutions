import toastify from "./toastify";

const handleError = (error) => {
    let msg = (
        error?.response?.data?.message ||
        error?.response?.data?.data || 
        error?.response?.data?.error ||
        error?.response?.data
    )
    toastify({ msg: msg, type: 'error' });
}

export default handleError;