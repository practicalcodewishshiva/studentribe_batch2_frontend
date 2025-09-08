import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  function handleLogin() {
    if (userName === 'test' && password === "123") {
      navigate("/dashboard");
      localStorage.setItem('access_token', true)

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

// username --- BV6063
// PASSWORD ---- kallu967a@A
