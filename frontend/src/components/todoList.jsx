import React, { useState, useEffect } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../service/todoService";
import "./todoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }
        const response = await getTodos(token);
        if (Array.isArray(response.data)) {
          setTodos(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) {
      alert("Title is required");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await createTodo(token, newTodo);
      if (response.data && response.data.todo) {
        setTodos([...todos, response.data.todo]);
        setNewTodo("");
      } else {
        console.error("Failed to add todo:", response.data);
      }
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const handleUpdateTodo = async (id, title, completed) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await updateTodo(token, id, title, completed);
      if (response.data && response.data.todo) {
        setTodos(
          todos.map((todo) => (todo._id === id ? response.data.todo : todo))
        );
      } else {
        console.error("Failed to update todo:", response.data);
      }
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      await deleteTodo(token, id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <input
        type="text"
        className="todo-input"
        placeholder="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="todo-button" onClick={handleAddTodo}>
        Add
      </button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <input
              type="text"
              value={todo.title}
              onChange={(e) =>
                handleUpdateTodo(todo._id, e.target.value, todo.completed)
              }
            />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                handleUpdateTodo(todo._id, todo.title, e.target.checked)
              }
            />
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
