import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    function handleLogOut(){
        localStorage.removeItem('access_token')
        navigate('/')
    }
  return (
    <>
      <button onClick={handleLogOut}>Logout</button>
      <div>Dashboard</div>
    </>
  );
}
