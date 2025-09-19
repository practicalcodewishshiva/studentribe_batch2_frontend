import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});





// Store global Store 


// each individual components data and logic matrame 

// CounterReducer  data manage logic update edit delete global data 

// LoginReducer 