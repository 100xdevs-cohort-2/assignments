const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  let user = await User.findOne({ username, password });
  console.log(user);

  if (user) {
    console.log(`User ${username} is logged in`);
    let token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Incorrect email and password",
    });
  }
});
module.exports = router;
