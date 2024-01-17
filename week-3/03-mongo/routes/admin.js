const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  //   const { username, password, email } = req.body;
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log(username);
  //   if (username) {
  //     return res.status(400).json({ msg: "username is reuired" });
  //   }
  const admin = new Admin({
    username: username,
    password: password,
    email,
  });
  return res.status(200).json({ admin });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { name, description, price, ImageLink } = req.body;
  const existingcourse = await Admin.findOne({ name });
  if (existingcourse) {
    return res.status(400).send("Course wtih this ttle already exists");
  }
  const newCourse = await Course.create({
    name,
    description,
    price,
    ImageLink,
  });
  res.send({ msg: " Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
