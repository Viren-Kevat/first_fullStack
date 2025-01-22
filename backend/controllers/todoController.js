const Todo = require("../model/todo");

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id });
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({
      userId: req.user._id,
      title,
    });
    await newTodo.save();
    res.status(201).json({ msg: "Todo created successfully", todo: newTodo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    ); // new: true is used to return the updated document
    res
      .status(200)
      .json({ msg: "Todo updated successfully", todo: updatedTodo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ msg: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
