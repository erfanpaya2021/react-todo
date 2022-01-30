import { useSelector } from "react-redux";

import SingleTodo from "../SingleTodo/SingleTodo";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const todoElements = todos.map((todo, index) => (
    <SingleTodo key={todo.id} taskObj={todo} index={index} />
  ));

  return (
    <main className="container">
      <ul className={classes.todolist}>{todoElements}</ul>
    </main>
  );
};

export default TodoList;
