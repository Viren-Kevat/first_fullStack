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
      <div className="features-section">
        <h2 className="features-title">Features</h2>
        <ul className="features-list">
          <li className="feature-item">
            <strong>User Authentication:</strong> Secure login and signup
            functionality to protect user data.
          </li>
          <li className="feature-item">
            <strong>Backend with Express.js:</strong> Robust backend built with
            Express.js for handling server-side logic.
          </li>
          <li className="feature-item">
            <strong>Database with MongoDB:</strong> Efficient data storage and
            retrieval using MongoDB.
          </li>
          <li className="feature-item">
            <strong>Frontend with React.js:</strong> Interactive and dynamic
            user interface built with React.js.
          </li>
          <li className="feature-item">
            <strong>Data Security:</strong> Ensure your data is safe with our
            robust security measures.
          </li>
          <li className="feature-item">
            <strong>Privacy Protection:</strong> We prioritize your privacy and
            ensure your data is protected.
          </li>

          <li className="feature-item">
            <strong>Responsive Design:</strong> Access the application on any
            device with a responsive and user-friendly interface.
          </li>
        </ul>
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
