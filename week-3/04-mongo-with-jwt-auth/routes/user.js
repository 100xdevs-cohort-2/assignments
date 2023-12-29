const { Router } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userMiddleware = require("../middleware/user");
require("dotenv").config();
const { Course } = require("./admin");

const router = Router();
const app = express();
app.use(express.json());

const jwtSecret = process.env.JWT_SECRET;

//models
const User = mongoose.model("Users", {
  email: String,
  password: String,
  courses: Array,
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if user exists
  try {
    const findUser = await User.findOne({
      email: username,
      password: password,
    });

    if (findUser) {
      res.json({ Error: "User already exists" });
    } else {
      const user = new User({ email: username, password: password });

      try {
        await user.save();
        res.json({ message: "User created successfully" });
      } catch (err) {
        console.log(err);
        res.json({ Error: "Error creating user" });
      }
    }
  } catch (err) {
    console.log(err);
    res.json({ Error: "Error checking user " });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if user exists in db
  const user = await User.findOne({ email: username, password: password });

  //if user exists
  if (user) {
    const token = jwt.sign(
      { username: username, password: password },
      jwtSecret
    );
    res.json({ message: "User signed in", token: token });
  } else {
    res.json({ Error: "Please create user" });
  }
});

router.get("/courses", userMiddleware(User, jwtSecret), async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find({});
    res.json(allCourses);
  } catch (err) {
    console.log(err);
    res.json({ message: "Cannot fetch courses" });
  }
});

router.post(
  "/courses/:courseId",
  userMiddleware(User, jwtSecret),
  async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const course = await Course.findOne({ id: courseId });
    const decodedToken = req.decodedToken;
    const { username } = decodedToken;
    if (course) {
      const updatedUser = await User.updateOne(
        { email: username },
        {
          $addToSet: {
            courses: course,
          },
        }
      );
      res.json({ message: "Course purchased succesfully" });
    } else {
      res.json({ Error: "Course not found" });
    }
  }
);

router.get(
  "/purchasedCourses",
  userMiddleware(User, jwtSecret),
  async (req, res) => {
    // Implement fetching purchased courses logic
    const decodedToken = req.decodedToken;
    const { username } = decodedToken;

    const user = await User.findOne({ email: username });
    const purchasedCourses = user["courses"];
    res.json(purchasedCourses);
  }
);

module.exports = router;
