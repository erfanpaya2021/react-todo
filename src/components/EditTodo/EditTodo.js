import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";

import { hideModal } from "../../store/ui-slice";
import { editTodo } from "../../store/todos-slice";
import Input from "../Utils/Input/Input";
import CloseIcon from "../Utils/Icons/CloseIcon";
import Modal from "../Utils/Modal/Modal";
import classes from "./EditTodo.module.css";

const EditTodo = () => {
  const taskObj = useSelector((state) => state.todos.selectedTodo);
  const dispatch = useDispatch();

  const { formData, blurHandler, changeHandler, submitHandler } = useForm(
    taskObj,
    editTodo,
    "editTask",
  );

  return (
    <Modal>
      <div className={classes.edit}>
        <span
          onClick={() => dispatch(hideModal("editTask"))}
          className={classes.edit__close}
        >
          <CloseIcon />
        </span>
        <h3 className={classes.edit__title}>Edit Task</h3>
        <form onSubmit={submitHandler} className={classes.edit__form}>
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
          <div className={classes.edit__actions}>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditTodo;
