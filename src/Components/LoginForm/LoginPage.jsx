import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
// PRIMTIVES
function LoginForm() {


  // const Name = "Upendra";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const [token, setAccess_token] = useState("");
  async function handleLogin() {
    debugger;
    try {
      const requestUrl = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: userName,
          password: password,
        }
      );

      const responseData = await requestUrl;

      console.log(responseData.data.access_token, "responseData");

      const access_token = responseData.data.access_token;
       localStorage.setItem("access_token", access_token);
      if (access_token) {
        console.log("accces_token", token);
      }
    } catch (error) {
      alert(error);
    }

    if (userName === userName && password === password) {
     const token=  localStorage.getItem('access_token')
      if (token) {
        navigate("/dashboard");
      }
    } else {
      return alert("user is not found");
    }
    console.log("handle login works", userName, password);
  }

  console.log(userName, "changes");
  return (
    <>
      <h1>Zerodha Login</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>UserName</label>
        <input type="text" onChange={handleUserNameChange} />
        <label>Password</label>
        <input type="password" onChange={handlePasswordChange} />
        <button onClick={handleLogin}>Login</button>
      </div>
    
    </>
  );
}

export default LoginForm;



