// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./store/todoSlice";

// types.ts
export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}



export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
