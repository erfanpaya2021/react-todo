import toast, { Toaster } from "react-hot-toast";

export const notifyError = () =>
  toast.error("Please Fill Inputs!", {
    duration: 2000,
  });

export const notifySuccess = () => {
  toast.success("Submission Successfully done!");
};

export const notifyDelete = () => {
  toast.success("Todo Successfully Deleted!");
};

const Toast = () => {
  return <Toaster />;
};

export default Toast;
