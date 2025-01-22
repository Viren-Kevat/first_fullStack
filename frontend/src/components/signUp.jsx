import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import "./signUp.css"; // Import the CSS file

const Signup = () => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password, bio);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label className="signup-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="signup-input"
        />
        <label className="signup-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="signup-input"
        />
        <label className="signup-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="signup-input"
        />
        <label className="signup-label">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          className="signup-textarea"
        ></textarea>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <Link to="/" className="home-butn">
        Go to Home
      </Link>
    </div>
  );
};

export default Signup;
