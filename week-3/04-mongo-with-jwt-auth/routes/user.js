const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course, PurchasedCourses } = require("../db");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  let createNewUser = await User.create({ username, password });
  if (createNewUser) {
    res.json({ message: "new user created in db" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  let findUser = await User.findOne({ username });
  const { _id } = findUser;
  if (findUser) {
    let createToken = jwt.sign({ username, _id }, jwtSecretKey);
    res.status(200).json({ token: createToken });
  } else {
    res.status(400).json({ error: `No user found with ${username} email` });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  let getAllCourses = await Course.find({});
  res.status(200).json({ courses: getAllCourses });
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const findCourse = await Course.findById({ _id: courseId });
  const { title, description, price, imageLink, published } = findCourse;
  let addToPurchaseList = new PurchasedCourses({
    title,
    description,
    price,
    imageLink,
    published,
  });
  addToPurchaseList.save().then(() => {
    res.status(200).json({ message: "course purchase successfully" });
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { userId } = req.headers;
  let allPurchasedCourses = await PurchasedCourses.find();
  res.status(200).json({ purchasedCourse: allPurchasedCourses });
});

module.exports = router;
