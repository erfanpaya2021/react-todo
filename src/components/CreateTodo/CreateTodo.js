import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import useForm from "../../hooks/useForm";

import { hideModal } from "../../store/ui-slice";
import { addTodo } from "../../store/todos-slice";
import Modal from "../Utils/Modal/Modal";
import CloseIcon from "../Utils/Icons/CloseIcon";
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
          <div className={classes.input}>
            <label
              htmlFor="title"
              className={formData.title.trim() !== "" ? classes.filled : ""}
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
            <div></div>
          </div>
          <div className={classes.input}>
            <label
              htmlFor="description"
              className={
                formData.description.trim() !== "" ? classes.filled : ""
              }
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={changeHandler}
              onBlur={blurHandler}
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
