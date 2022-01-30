import { Fragment } from "react";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoList />
    </Fragment>
  );
}

export default App;
