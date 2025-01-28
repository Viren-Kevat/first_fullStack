import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Signup from "./components/signUp";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedRoute";
import Profile from "./components/profile";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="https://first-full-stack-virenkumar.vercel.app/login"
            element={<Login />}
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
