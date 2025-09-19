import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 userName:"",
 password:""
};

export const LoginFormSlice = createSlice({
  name: "login_form",
  initialState,
  // reducers will update the global State data
  reducers: {
    //global way
    userNameUpdate: (state, action) => {
      debugger
      state.userName += action.payload;
    },
    passwordUpdate:(state,action)=>{
      state.password-=action.payload;
    }
  },
  
});

export const { userNameUpdate,passwordUpdate } = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
