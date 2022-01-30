import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import "./App.css";

function App() {
  const createTask = useSelector((state) => state.ui.createTask);

  return (
    <Fragment>
      <Header />
      <TodoList />
      {createTask && <CreateTodo />}
    </Fragment>
  );
}

export default App;
