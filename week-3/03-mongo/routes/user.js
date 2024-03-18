const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/schemaDB");
const mongoose = require("mongoose");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const userExist = await User.findOne({
    username: username,
    password: password,
  });

  if (userExist) {
    res.json({
      msg: "User already exist",
    });
  } else {
    const newUser = await User.create({
      admin: "asdjfkj",
      password: password,
      username: username,
    });

    if (newUser) {
      res.json({
        msg: "User created successfully",
        admin: newUser,
      });
    } else {
      res.json({ msg: "Something went wrong try again." });
    }
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  if (courses) {
    res.json({
      courses,
    });
  } else {
    res.json({ msg: "No courses found" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  //   const courseId = req.params.courseId;
  const courseId = req.params.courseId;

  try {
    const courseExist = await Course.findById(courseId);

    if (!courseExist) {
      res.json({
        msg: "This course does not exist.",
      });
    } else {
      const username = req.headers.username;
      const courseUpdated = await User.updateOne(
        {
          username: username,
        },
        {
          $push: {
            purchasedCourses: new mongoose.Types.ObjectId(courseId),
          },
        }
      );

      if (courseUpdated) {
        res.json({ msg: "Course added successfully", courseId });
      } else {
        res.json({ msg: "Something went wrong" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const user = await User.findOne({ username: req.headers.username });
  console.log(user);

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
