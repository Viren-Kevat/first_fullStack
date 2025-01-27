import axios from "axios";
const API_URL = "https://first-fullstack-k5sr.onrender.com/api/todos";

export const getTodos = async (token) => {
  return await axios.get(`${API_URL}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createTodo = async (token, title) => {
  return await axios.post(
    `${API_URL}/`,
    { title },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const updateTodo = async (token, id, title, completed) => {
  return await axios.put(
    `${API_URL}/${id}`,
    { title, completed },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteTodo = async (token, id) => {
  return await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
