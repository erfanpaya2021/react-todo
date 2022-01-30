import SingleTodo from "../SingleTodo/SingleTodo";
import classes from "./TodoList.module.css";

const DUMMY_DATA = [
  { id: 1, title: "JavaScript", description: "JavaScript Code" },
  { id: 2, title: "React", description: "React Code" },
  { id: 3, title: "Vue", description: "Vue Code" },
  { id: 4, title: "Node", description: "Node Code" },
];

const TodoList = () => {
  const todoElements = DUMMY_DATA.map((todo, index) => (
    <SingleTodo key={todo.id} taskObj={todo} index={index} />
  ));

  return (
    <main className="container">
      <ul className={classes.todolist}>{todoElements}</ul>
    </main>
  );
};

export default TodoList;
