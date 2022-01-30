import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "JavaScript", description: "JavaScript Code" },
  { id: 2, title: "React", description: "React Code" },
  { id: 3, title: "Vue", description: "Vue Code" },
  { id: 4, title: "Node", description: "Node Code" },
];

const todos = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      const selectedItemIndex = state.findIndex(
        (todo) => todo.id === action.payload,
      );
      state.splice(selectedItemIndex, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todos.actions;

export default todos.reducer;
