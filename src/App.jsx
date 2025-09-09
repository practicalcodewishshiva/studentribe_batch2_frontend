import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginForm from "./Components/LoginForm/LoginPage";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import SignUp from "./Components/Signup/SignUp";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products/products";
import AboutPage from "./Components/AboutPage/AboutPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Funds from "./Components/Funds/Funds";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/funds" element={<Funds/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

// protectedRoutes
