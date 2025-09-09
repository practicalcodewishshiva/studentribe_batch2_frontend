import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// PRIMTIVES
function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    debugger;
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
    if (userName === userName && password === password) {
      navigate("/dashboard");
      localStorage.setItem("access_token", access_token);
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


