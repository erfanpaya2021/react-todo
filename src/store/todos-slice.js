import { createSlice } from "@reduxjs/toolkit";

const getTodos = () => {
  if (localStorage.getItem("todos") === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("todos"));
  }
};

const setTodos = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todos));
};

const initialState = {
  todos: getTodos(),
  selectedTodo: null,
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
      setTodos(state);
    },
    deleteTodo(state, action) {
      const selectedItemIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload,
      );
      state.todos.splice(selectedItemIndex, 1);
      setTodos(state);
    },
    editTodo(state, action) {
      const selectedItemIndex = state.todos.findIndex(
        (todo) => todo.id === state.selectedTodo.id,
      );

      const updatedTask = { ...action.payload };
      state.todos[selectedItemIndex] = updatedTask;
      setTodos(state);
    },
    setSelectedTodo(state, action) {
      state.selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id,
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, setSelectedTodo } = todos.actions;

export default todos.reducer;
