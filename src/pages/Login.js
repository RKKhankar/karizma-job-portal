// src/pages/Login.js
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // update state in App
    navigate("/dashboard"); // redirect
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Demo Account</button>
    </div>
  );
}
