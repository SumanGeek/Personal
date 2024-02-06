import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./context/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
