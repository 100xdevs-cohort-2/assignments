const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db");
const adminPassword = "ADMIN";

const adminAlreadyExists = async function (req, res, next) {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  console.log(admin);
  if (admin) {
    res.status(500).json({
      msg: "Admin already Exists",
    });
  } else {
    next();
  }
};

// Admin Routes
router.post("/signup", adminAlreadyExists, async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  //   add the token, username and password to the database
  await Admin.create({
    username,
    password,
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signin logic
  const { username, password } = req.body;
  const token = jwt.sign(
    {
      username,
    },
    adminPassword
  );
  res.json({ token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, price, imageLink } = req.body;
    await Course.create({
      title,
      description,
      price,
      imageLink,
    });

    res.status(200).json({
      message: "Course created successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
    return;
  }
});

module.exports = router;
