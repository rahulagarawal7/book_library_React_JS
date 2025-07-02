import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    addedList: [],
  },
  reducers: {
    addBook: (state, { payload }) => {
      state.addedList.push(payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
