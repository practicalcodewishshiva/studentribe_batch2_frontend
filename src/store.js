import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import LoginFormSlice from "./features/LoginForm/LoginFormSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    loginForm: LoginFormSlice,
  },
});