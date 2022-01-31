import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import useForm from "../../hooks/useForm";

import { hideModal } from "../../store/ui-slice";
import { addTodo } from "../../store/todos-slice";
import Input from "../Utils/Input/Input";
import CloseIcon from "../Utils/Icons/CloseIcon";
import Modal from "../Utils/Modal/Modal";
import classes from "./CreateTodo.module.css";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const { formData, blurHandler, changeHandler, submitHandler } = useForm(
    {
      id: nanoid(),
      title: "",
      description: "",
    },
    addTodo,
    "createTask",
  );

  return (
    <Modal>
      <div className={classes.create}>
        <span
          onClick={() => dispatch(hideModal("createTask"))}
          className={classes.create__close}
        >
          <CloseIcon />
        </span>
        <h3 className={classes.create__title}>Create Task</h3>
        <form onSubmit={submitHandler} className={classes.create__form}>
          <Input
            input={{
              type: "text",
              id: "title",
              name: "title",
              value: formData.title,
              onChange: changeHandler,
              onBlur: blurHandler,
            }}
            label="Title"
          />
          <Input
            input={{
              type: "text",
              id: "description",
              name: "description",
              value: formData.description,
              onChange: changeHandler,
              onBlur: blurHandler,
            }}
            label="Description"
          />
          <div className={classes.create__actions}>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateTodo;
