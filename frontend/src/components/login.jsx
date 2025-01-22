import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import "./login.css"; // Import the CSS file

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed: " + error.msg);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        <div className="button-container">
          <button type="submit" className="login-button">
            Login
          </button>
          <Link to="/" className="home-button">
            Go to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
