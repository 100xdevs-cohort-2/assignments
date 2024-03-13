const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config');

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  let ans = await Admin.findOne({
    username: username,
  });
  if (!ans) {
    await Admin.create({
      username,
      password,
    });
    res.json({
      msg: "Admin created successfully",
    });
  } else {
    res.status(411).json({
      msg: "Admin aldready exists",
    });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const find = Admin.findOne({
    username,
  });
  if (find) {
    let token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.send("Bearer  " + token);
  } else{
    res.status(404).json({
      msg : "User not found"
    })
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.json({
    message : "Course created successfully"
  })
});

router.get("/courses", adminMiddleware,async (req, res) => {
  // Implement fetching all courses logic
  let courses = await Course.find({});
  res.json({
    courses
  })
});

module.exports = router;
