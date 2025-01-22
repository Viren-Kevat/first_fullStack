import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  login as loginService,
  signup as signupService,
} from "../service/authService";
import axios from "axios";
import Pop from "../components/popUp";

// Create context for authentication
const AuthContext = createContext();

// Hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap the app and manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // State to hold error messages
  const [popVisible, setPopVisible] = useState(false); // State to hold pop-up messages
  const [popMsg, setPopMsg] = useState(""); // State to hold pop-up messages
  const navigate = useNavigate();

  // for pop close function
  const closePop = () => {
    setPopVisible(false);
  };

  // Check for a logged-in user when the page loads (using localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // Fetch user data with the token
      axios
        .get("/api/users/me")
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
          localStorage.removeItem("token");
        });
    }
  }, []);

  // Login function with validation
  const login = async (email, password) => {
    if (!email || !password) {
      setPopVisible(true);
      setPopMsg("Email and password are required.");
      return;
    }

    try {
      const data = await loginService(email, password);
      const { token, user } = data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
      setError(null);
      setPopVisible(true);
      setPopMsg("Login successful.");
      navigate("/profile");
    } catch (error) {
      const errorMessage =
        error.response &&
        error.response.data &&
        (error.response.data.message || error.response.data.msg)
          ? error.response.data.message || error.response.data.msg
          : "Login failed, please try again.";
      setError(errorMessage);
      setPopVisible(true);
      setPopMsg(errorMessage);
    }
  };

  // Signup function with validation
  const signup = async (name, email, password, bio) => {
    if (!email || !password || !name || !bio) {
      setPopVisible(true);
      setPopMsg("All fields (name, email, password, bio) are required.");
      return;
    }

    try {
      const data = await signupService(name, email, password, bio);
      const { token, user } = data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
      setError(null);
      setPopVisible(true);
      setPopMsg("Signup successful, you can now login.");
      setTimeout(() => {
        setPopVisible(false);
      }, 2000);
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response &&
        error.response.data &&
        (error.response.data.message || error.response.data.msg)
          ? error.response.data.message || error.response.data.msg
          : "Signup failed, please try again.";
      setError(errorMessage);
      setPopVisible(true);
      setPopMsg(errorMessage);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        error,
      }}
    >
      {children}
      {popVisible && <Pop msg={popMsg} onClose={closePop} />}
    </AuthContext.Provider>
  );
};
