const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Card } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //find the desired username and password in db
  //if i use just find,its showing token for users that doesnt even exist
  let user = await Admin.findOne({ username, password });
  //If i use findOne, its showing wrong inputs even if a user exists
  // const user = await User.findOne({ username, password });
  //   if (user) {
  //     const token = jwt.sign({ username }, JWT_SECRET);
  //     res.json({ token });
  //   } else {
  //     res.status(411).json({
  //       msg: "Incorrect email and password",
  //     });
  //   }
  //   try {
  //     // Use findOne to find a single document
  //     const user = await User.findOne({ username, password });

  //     if (user) {
  //       console.log(`User ${username} is logged in`);
  //       const token = jwt.sign({ username }, JWT_SECRET);
  //       res.json({ token });
  //       console.log({ token });
  //     } else {
  //       res.status(401).json({
  //         msg: "Incorrect email and password",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({
  //       msg: "Internal Server Error",
  //     });
  //   }
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
