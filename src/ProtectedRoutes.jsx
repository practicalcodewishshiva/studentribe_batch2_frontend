import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function ProtectedRoutes() {
  const isAuthenticated = localStorage.getItem("access_token") ? true : false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;

// Login page

// userName password ------ localStorage access_token set ----- ProtectRoutes --- accesstoken get

// true or false

// if true ---- Dashoard Navigate
// if false --- login page

