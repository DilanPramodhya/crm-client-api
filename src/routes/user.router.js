const express = require("express");
const router = express.Router();

const { insertUser, getUserByEmail } = require("../model/user/User.model");
const { hashPassword, comparePassword } = require("../helpers/bcrypt.helper");
const { json } = require("body-parser");
const { createAccessJWT, createRefreshJWT } = require("../helpers/jwt.helper");

router.all("/", (req, res, next) => {
  res.json({ message: "Return from user router" });

  next();
});

// Create new user route

router.post("/", async (req, res, next) => {
  const { name, company, address, phone, email, password } = req.body;

  try {
    // hash password
    const hashedPass = await hashPassword(password);

    const newUserObj = {
      name,
      company,
      address,
      phone,
      email,
      password: hashedPass,
    };

    const result = await insertUser(newUserObj);
    console.log(result);

    res.json({ message: "New User Created", result });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: error.message });
  }
});

// User sign in Router
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  // hash our password and compare with the db one

  if (!email || !password) {
    return res.json({ status: "error", message: "Invalid form submission!" });
  }

  // Get user with email from db

  const user = await getUserByEmail(email);

  const passFromDb = user && user._id ? user.password : null;

  if (!passFromDb)
    return res.json({ status: "error", message: "Invalid email or password!" });

  const result = await comparePassword(password, passFromDb);

  if (!result) {
    res.json({ status: "error", message: "Invalid email or password!" });
  }

  const accessJWT = await createAccessJWT(user.email);
  const refreshJWT = await createRefreshJWT(user.email);

  res.json({
    status: "success",
    message: "Login Successfully!",
    accessJWT,
    refreshJWT,
  });
});

module.exports = router;
