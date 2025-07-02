import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import toggleSlice from "./toggleSlice";

const store = configureStore({
  reducer: {
    book: bookSlice,
    toggle: toggleSlice,
  },
});

export default store;
