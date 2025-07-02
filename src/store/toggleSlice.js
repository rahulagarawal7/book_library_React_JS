import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: false,
  },
  reducers: {
    closeOptions: (state) => {
      state.isOpen = false;
    },
    openOptions: (state) => {
      state.isOpen = true;
    },
    toggleOption: (state, { payload }) => {
      state.isOpen = !payload;
    },
  },
});

export const { closeOptions, openOptions, toggleOption } = toggleSlice.actions;

export default toggleSlice.reducer;
