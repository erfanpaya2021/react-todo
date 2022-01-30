import { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import "./App.css";

function App() {
  const [createTodoShown, setCreateTodoShown] = useState(false);

  const createTodoShowHandler = () => {
    setCreateTodoShown(true);
  };

  const createTodoHideHandler = () => {
    setCreateTodoShown(false);
  };

  return (
    <Fragment>
      <Header onShow={createTodoShowHandler} />
      <TodoList />
      {createTodoShown && <CreateTodo onHide={createTodoHideHandler} />}
    </Fragment>
  );
}

export default App;
