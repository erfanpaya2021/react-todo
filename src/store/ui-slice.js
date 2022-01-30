import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { createTask: false },
  reducers: {
    showModal(state, actions) {
      state[actions.payload] = true;
    },
    hideModal(state, actions) {
      state[actions.payload] = false;
    },
  },
});

export const { showModal, hideModal } = uiSlice.actions;

export default uiSlice.reducer;
