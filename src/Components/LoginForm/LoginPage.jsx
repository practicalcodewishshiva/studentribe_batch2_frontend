import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { loginFormDataSubmit,retrievingUserProfile } from "../../features/LoginForm/LoginFormSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// PRIMTIVES
function LoginForm() {
  const access_token = useSelector((globalState) => globalState.loginForm.data.access_token);

  console.log("access_token", access_token);
  const dispatch = useDispatch();
  // const Name = "Upendra";
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleEmailChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const [token, setAccess_token] = useState("");
  async function handleLogin() {
    dispatch(loginFormDataSubmit({ email, password }));


    dispatch(retrievingUserProfile(access_token))
    if (email === email && password === password) {
      const token = localStorage.getItem("access_token");
      if (token) {
        navigate("/dashboard");
      }
    } else {
      return alert("user is not found");
    }
    console.log("handle login works", email, password);
  }

  console.log(email, "changes");
  return (
    <>
      <h1>Zerodha Login</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>email</label>
        <input type="text" onChange={handleEmailChange} />
        <label>Password</label>
        <input type="password" onChange={handlePasswordChange} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default LoginForm;

// email
// password

// Login api call ------ data ---- useState(store) ----- map use data dispaly   local ga data store

// const globalApicall = createAsyncThunk()=>{
// return Response.data
// }

// global data store ----   api call - dispatch(loginapicall) ----- loginFormSlice --- extranreducers --- addCase(globalApicall api call status ===success || failure || pending)

// globalState store

// mango globalStore
