const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({ msg: "Admin created Sucessfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2hpciIsImlhdCI6MTcwMzgyODE2M30.t6puRW1JbBhMTjlMuExVMa9IyQTNLrXCP4IC79Wq260

  const admin = await Admin.find({
    username,
    password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        username,
      },
      jwtsecret
    );

    res.json({ token });
  } else {
    res.status(411).json({ msg: "Wrong credentials" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: `Course created successfully`,
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const response = await Course.find({});

  res.json({ courses: response });
});

module.exports = router;
