const { Router } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const userMiddleware = require("../middleware/user");
const { Course } = require("./admin");
require("dotenv").config();

const dbUrl = process.env.MONGODB_URL;
const app = express();
const router = Router();

app.use(express.json());
mongoose.connect(dbUrl);

//models
const User = mongoose.model("USERS", {
  email: String,
  password: String,
  courses: Array,
});
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  //Search for user in db, if not create once
  try {
    const findUser = await User.findOne({
      email: username,
      password: password,
    });

    //if user found
    if (findUser) {
      res.json({ message: "User already exists" });
    } else {
      const user = new User({
        email: username,
        password: password,
        courses: [],
      });
      try {
        //create user in db
        await user.save();
        res.json({ message: "User created successfully" });
      } catch (err) {
        console.log(err);
        res.json({ message: "Cannot create user" });
      }
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "Cannot find user" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find({});
    res.json(allCourses);
  } catch (err) {
    console.log(err);
    res.json({ message: "Cannot fetch courses" });
  }
});

router.post("/courses/:courseId", userMiddleware(User), async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const user = req.user;
  //find course in db
  const course = await Course.findOne({ id: courseId });
  if (course) {
    try {
      const updatedUser = await User.updateOne(
        { id: user._id.oid },
        {
          $addToSet: {
            courses: course,
          },
        }
      );
      res.json({ message: "Course purchased successfully" });
    } catch (err) {
      console.log(err);
      res.json({ message: "Cannot purchase course" });
    }
  } else {
    res.send("Cannot find course");
  }
});

router.get("/purchasedCourses", userMiddleware(User), async (req, res) => {
  // Implement fetching purchased courses logic
  const user = req.user;
  console.log(user);
  try {
    const findUser = await User.findOne({ email: user.email });
    res.json(findUser.courses);
  } catch (err) {
    console.log(err);
    res.json({ message: "User doesn't exist" });
  }
});

module.exports = router;
