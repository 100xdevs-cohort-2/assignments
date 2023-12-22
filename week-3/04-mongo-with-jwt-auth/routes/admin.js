const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index.js");
const jwt = require("jsonwebtoken");
const jwtPassword = "secretKey";
// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const newAdmin = new Admin({
    username,
    password,
  });
  await newAdmin.save();
  res.send("Admin Created Sucessfully!!");
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) res.send("Admin Not Resgistered!");
  const token = jwt.sign({ username, password }, jwtPassword);
  res.json({
    token: token,
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const { id, title, description, price, imageLink } = req.body;
    const token = req.headers.authorization;
    const admin = jwt.verify(token, jwtPassword);
    if (!admin) res.send("Not Authorized!!");
    const newCourse = new Course({
      id,
      title,
      description,
      price,
      imageLink,
    });
    const savedCourse = await newCourse.save();
    res.json({
      msg: "New Course created!",
      CourseId: savedCourse.id,
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization;
    const admin = jwt.verify(token, jwtPassword);
    if (!admin) {
      res.send("Not Authorized!");
    }
    const allCourses = await Course.find();
    res.send(allCourses);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
