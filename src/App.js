import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import Toast from "./components/Utils/Toast/Toast";
import "./App.css";

function App() {
  const createTask = useSelector((state) => state.ui.createTask);
  const editTask = useSelector((state) => state.ui.editTask);

  return (
    <Fragment>
      <Header />
      <TodoList />
      {createTask && <CreateTodo />}
      {editTask && <EditTodo />}
      <Toast />
    </Fragment>
  );
}

export default App;
