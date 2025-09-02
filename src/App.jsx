import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginForm from "./Components/LoginForm/LoginPage";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import SignUp from "./Components/Signup/SignUp";
import "./App.css";


function App() {
  return (
    <>
      <LoginForm></LoginForm>

      <ForgetPassword></ForgetPassword>
      <SignUp></SignUp>
    </>
  );
}

export default App;
