import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome</h1>
        <p className="home-subtitle">Please login or sign up to continue</p>
        <div className="home-button-container">
          <Link to="/login" className="home-button">
            Login
          </Link>
          <Link to="/signup" className="home-button">
            Signup
          </Link>
        </div>
      </div>
      <div className="app-description">
        <h2 className="description-title">Task Management Made Simple</h2>
        <p className="description-text">
          Our Todo app helps you organize your daily tasks efficiently. Create,
          manage, and track your tasks with ease. Stay productive and never miss
          important deadlines with our intuitive task management system.
        </p>
      </div>
      

      <footer className="home-footer">
        <p>
          Developer &copy; <strong>Virenkumar Vijay Kevat</strong>{" "}
        </p>
        <div className="social-links">
          <a
            href="https://instagram.com/_http.viren"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/viren-kevat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/viren-kevat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
