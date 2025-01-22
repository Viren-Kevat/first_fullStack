require("dotenv").config();

module.exports = {
  port: process.env.port || 3000,
  mongo_URI: process.env.MONGO_URI,
  jwt_secret: process.env.JWT_SECRET,
};
