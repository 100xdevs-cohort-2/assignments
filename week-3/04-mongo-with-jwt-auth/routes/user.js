const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username: username,
      password: hashedPassword,
    });
    return res.status(201).send({
      message: "User created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating user account", error: error });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  try {
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res.status(400).send({ message: "user not found" });
    }
    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) {
      return res.status(411).send({ message: "Wrong Credentials!" });
    }
    const token = jwt.sign(
      { _id: existingUser._id, username: username },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).send({ token: token });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Some error occured", error: error });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    return res.status(200).send({ courses: courses });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Some error occured", error: error });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  if (!courseId)
    return res.status(404).send({ message: "Course id not provided" });
  const userId = req._id;
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).send({ message: "course not found!" });
    const user = await User.findById(userId);
    if (!user) return res.status(404).send({ message: "user not found!" });
    if (user.myCourses.includes(course._id))
      return res.status(400).send({ message: "You already have this course!" });
    if (user.balance >= course.price) {
      user.balance -= course.price;
      user.myCourses.push(course);
      await user.save();
      return res.status(200).send({
        message: "Course purchased successfully",
        leftBalance: user.balance,
      });
    } else {
      return res
        .status(400)
        .send({ message: "You dont have sufficient balance to purchase" });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Some error occured while purchasing", error: error });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findById(req._id).populate("myCourses");
    return res.status(200).send({ purchasedCourses: user.myCourses });
  } catch (error) {
    return res.status(500).send({ message: "Error fetching courses" });
  }
});

module.exports = router;
