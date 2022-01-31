import { useState } from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "../store/ui-slice";
import { notifyError, notifySuccess } from "../components/Utils/Toast/Toast";

const useForm = (formInitialState, action, hideValue) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    ...formInitialState,
  });
  const [hasError, setHasError] = useState(true);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const blurHandler = (e) => {
    const { value } = e.target;
    setHasError(false);
    if (value.trim() === "") {
      setHasError(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (hasError) {
      notifyError();
      return;
    }
    notifySuccess();
    dispatch(hideModal(hideValue));
    dispatch(action(formData));
  };

  return { formData, blurHandler, changeHandler, submitHandler };
};

export default useForm;
