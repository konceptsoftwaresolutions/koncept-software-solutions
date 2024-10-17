import { toast } from "react-toastify";

/**
 * Displays a toast notification.
 *
 * @param {Object} options - Options for the toast notification.
 * @param {string} options.msg - The message to display in the toast. Defaults to an empty string.
 * @param {'success' | 'default' | 'error' | 'info' | 'warning'} [options.type='success'] - The type of the toast (e.g., 'success', 'error', 'info', 'warning').
 */
const toastify = ({ msg = '', type = 'success' }) => {
    toast[type](msg, {
        autoClose: 1000,
        pauseOnHover: true,
    });
};

export default toastify;
