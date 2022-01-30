import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", title: "JavaScript", description: "JavaScript Code" },
    { id: "2", title: "React", description: "React Code" },
    { id: "3", title: "Vue", description: "Vue Code" },
    { id: "4", title: "Node", description: "Node Code" },
  ],
  selectedTodo: null,
};

const todos = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      const selectedItemIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload,
      );
      state.todos.splice(selectedItemIndex, 1);
    },
    editTodo(state, action) {
      const selectedItemIndex = state.todos.findIndex(
        (todo) => todo.id === state.selectedTodo.id,
      );

      const updatedTask = { ...action.payload };
      state.todos[selectedItemIndex] = updatedTask;
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
