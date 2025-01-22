const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "This is my bio.", // Updated default bio
  },
  token: {
    type: String,
    default: () => crypto.randomBytes(16).toString("hex"),
  },
});

// Pre-save hook to hash the password before saving it to the DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare entered password with the hashed password in DB
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Remove the password from the response when sending user data
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password; // Remove password from the returned user data
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
