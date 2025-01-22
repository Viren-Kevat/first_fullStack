import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import TodoList from "./todoList";
import { Link } from "react-router-dom";
import "./profile.css"; // Import the CSS file

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div className="profile-container">You are not logged in.</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Welcome, {user.name}!</h1>
      <p className="profile-info">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="profile-info">
        <strong>Bio:</strong> {user.bio}
      </p>
      <TodoList />
      <div className="button-container">
        <button className="profile-button" onClick={logout}>
          Logout
        </button>
        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;
