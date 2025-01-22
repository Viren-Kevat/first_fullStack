import axios from "axios";

const API_URL = "https://first-fullstack-2vbl.onrender.com/api/users"; // Correct backend URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token); // Set token in local storage
    }
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export const signup = async (name, email, password, bio) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      email,
      password,
      name,
      bio,
    });
    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token); // Set token in local storage
    }
    return response.data;
  } catch (error) {
    console.error("Signup failed", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
