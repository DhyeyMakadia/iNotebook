import { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastContext = createContext();

const Toastifier = (props) => {
  // Toast Message
  const ToastSettings = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  }
  const Toast = (message,type) => {
    switch (type) {
        case "success":
            toast.success(message, ToastSettings);            
            break;
        case "error":
            toast.error(message, ToastSettings);            
            break;
        case "warn":
            toast.warn(message, ToastSettings);            
            break;
        case "info":
            toast.info(message, ToastSettings);            
            break;
        default:
            toast(message, ToastSettings);             
            break;
    }
  };

  return (
    <ToastContext.Provider value={{Toast}}>
      {props.children}
    </ToastContext.Provider>
  );
};
export default Toastifier;
