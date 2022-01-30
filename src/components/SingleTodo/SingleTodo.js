import { useDispatch, useSelector } from "react-redux";

import { showModal } from "../../store/ui-slice";
import { deleteTodo, setSelectedTodo } from "../../store/todos-slice";
import TrashIcon from "../Utils/Icons/TrashIcon";
import EditIcon from "../Utils/Icons/EditIcon";

import classes from "./SingleTodo.module.css";
import { notifyDelete } from "../Utils/Toast/Toast";
import { colors } from "./colors";

const SingleTodo = ({ taskObj, index }) => {
  const dispatch = useDispatch();
  const selectedColor = colors[index % 5];

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(taskObj.id));
    notifyDelete();
  };

  const editModalHandler = () => {
    dispatch(showModal("editTask"));
    dispatch(setSelectedTodo(taskObj));
  };

  return (
    <li
      className={classes.todo}
      style={{ borderTopColor: selectedColor.primaryColor }}
    >
      <h3
        className={classes.todo__title}
        style={{ backgroundColor: selectedColor.secondaryColor }}
      >
        {taskObj.title}
      </h3>
      <p className={classes.todo__description}>{taskObj.description}</p>
      <div
        className={classes.todo__actions}
        style={{ color: selectedColor.primaryColor }}
      >
        <span onClick={editModalHandler}>
          <EditIcon />
        </span>
        <span onClick={deleteTodoHandler}>
          <TrashIcon />
        </span>
      </div>
    </li>
  );
};

export default SingleTodo;
