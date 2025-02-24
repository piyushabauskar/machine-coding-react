import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todosSlice";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});
