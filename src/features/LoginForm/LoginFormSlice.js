import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginFormDataSubmit = createAsyncThunk(
  "user/loginFormDataSubmit",
  async ({ email, password }, extraparams) => {
    debugger;
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );
    return response.data;
  }
);

export const retrievingUserProfile = createAsyncThunk(
  "user/retrievingUserProfile",
  async (access_token) => {
    debugger;
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return response.data;
  }
);
const loginState = {
  email: "",
  password: "",
  data: [
    {
      isLoading: false,
    },
  ],
  isLoading: false,
  userProfileData: [
    {
      isLoading: false,
      profilePic: "",
    },
  ],
};

export const LoginFormSlice = createSlice({
  name: "counter",
  initialState: loginState,
  extraReducers: (builder) => {
    builder
      .addCase(loginFormDataSubmit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginFormDataSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginFormDataSubmit.rejected, (state, action) => {
        debugger;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(retrievingUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(retrievingUserProfile.fulfilled, (state, action) => {
        debugger
        state.loading = false;
        state.userProfileData = action.payload;
      })
      .addCase(retrievingUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
