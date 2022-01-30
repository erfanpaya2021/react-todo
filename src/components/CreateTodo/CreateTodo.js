import React, { useState } from "react";
import Modal from "../Utils/Modal/Modal";
import CloseIcon from "../Utils/Icons/CloseIcon";
import classes from "./CreateTodo.module.css";

const CreateTodo = ({ onHide }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onHide();
  };

  return (
    <Modal>
      <div className={classes.create}>
        <span onClick={() => onHide()} className={classes.create__close}>
          <CloseIcon />
        </span>
        <h3 className={classes.create__title}>Create Task</h3>
        <form onSubmit={submitHandler} className={classes.create__form}>
          <div className={classes.input}>
            <label
              htmlFor="title"
              className={formData.title.trim() !== "" && "filled"}
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={changeHandler}
            />
            <div></div>
          </div>
          <div className={classes.input}>
            <label
              htmlFor="description"
              className={formData.description.trim() !== "" && "filled"}
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={changeHandler}
            />
            <div></div>
          </div>
          <div className={classes.create__actions}>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateTodo;
