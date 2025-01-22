const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const User = require("../model/userModel"); // Import the User model

const router = express.Router();

// Middleware to verify token
const verifyToken = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Not authorized, no token" });
  }

  try {
    const user = await User.findOne({ token });

    if (!user) {
      return res.status(401).json({ msg: "Not authorized, invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

router.route("/").get(verifyToken, getTodos).post(verifyToken, createTodo);
router
  .route("/:id")
  .put(verifyToken, updateTodo)
  .delete(verifyToken, deleteTodo);

module.exports = router;
