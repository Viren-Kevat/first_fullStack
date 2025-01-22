const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

module.exports = connectionDb;
