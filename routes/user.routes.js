const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signin", async (req, res) => {
  // we have to hased the given password and have to compare with the password saved in the database if its mastched the user can access
  const { email, password } = req.body;
  const user = await User.matchPassword(email, password);

  return res.redirect("/");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
});

module.exports = router;
