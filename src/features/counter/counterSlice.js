import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  price: 265,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    price: 0,
  }, // globalState
  // reducers will update the global State data
  reducers: {
    //global way
    globalCounterIncrease: (state, action) => {
      
      state.price += action.payload;
    },
    globalCounterDecrease:(state,action)=>{
      state.price-=action.payload;
    }
  },
  
});

export const { globalCounterIncrease,globalCounterDecrease } = counterSlice.actions;

export default counterSlice.reducer;
