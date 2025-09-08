import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

const ProtectedRoutes = () => {
    
  const isAuthenticated = localStorage.getItem("access_token") ? true : false;
  return isAuthenticated ? <Dashboard /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
