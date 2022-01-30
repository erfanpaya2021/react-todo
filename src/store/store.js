import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    todos: todosSlice,
  },
});

export default store;
