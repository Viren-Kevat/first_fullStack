const User = require("../model/userModel");
const crypto = require("crypto");

// New user registration
const newRegister = async (req, res) => {
  try {
    const { name, email, password, bio } = req.body;
    const existingUser = await User.findOne({ email });

    // Check if user already exists
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    const user = new User({
      name,
      email,
      password,
      bio,
    });
    await user.save();

    // Return success response
    res.status(200).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ msg: "Internal server error" });
  }
};

// User login
const newUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    // Check if user exists
    if (!existingUser) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    // Check if password matches
    const isMatch = await existingUser.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate a token
    const token = crypto.randomBytes(16).toString("hex");
    existingUser.token = token;
    await existingUser.save();

    // Exclude the password field from the response
    const { password: _, ...userData } = existingUser.toJSON(); // Exclude the password

    // Return user data and token
    res.status(200).json({
      msg: "User logged in successfully",
      user: userData,
      token,
    });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ msg: "Internal server error" });
  }
};

// User logout
const logout = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await User.findOne({ token });

    if (user) {
      user.token = null;
      await user.save();
    }

    res.status(200).json({ msg: "Logged out successfully" });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { newRegister, newUserLogin, logout };
