const express = require("express");
const {
  newRegister,
  newUserLogin,
  logout,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", newRegister);
router.post("/login", newUserLogin);
router.post("/logout", logout);

module.exports = router;
