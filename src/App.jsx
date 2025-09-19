import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginForm from "./Components/LoginForm/LoginPage";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import SignUp from "./Components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products/Products";
import AboutPage from "./Components/AboutPage/AboutPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Funds from "./Components/Funds/Funds";
import LifecycleGuide from "./Components/LifecycleGuide/LifecycleGuide";
import {AuthUserCredentials} from "./Components/ContextAPI/AuthUserCredentials";
function App() {
  const name = "Kavya";
  const obj = {
    name:"Mounika",
    location:"Hyderabad"
  }
 
  return (
    <>
      {/* <AuthUserCredentials.Provider > */}
        <Routes>
          <Route path="/" element={<LoginForm />} />

          <Route >
            <Route path="/about" element={<AboutPage />} />
            <Route path="/funds" element={<Funds />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      {/* </AuthUserCredentials.Provider> */}
    </>
  );
}

export default App;

// protectedRoutes
