import { useSelector } from "react-redux";

import SingleTodo from "../SingleTodo/SingleTodo";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const todoElements = todos.map((todo, index) => (
    <SingleTodo key={todo.id} taskObj={todo} index={index} />
  ));

  return (
    <>
      {todoElements.length !== 0 ? (
        <main className="container">
          <ul className={classes.todolist}>{todoElements}</ul>
        </main>
      ) : (
        <h2 className={classes.notodo}>Please add some todos!</h2>
      )}
    </>
  );
};

export default TodoList;
