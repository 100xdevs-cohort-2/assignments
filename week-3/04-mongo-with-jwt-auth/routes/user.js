const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;

    const isUser = await User.findOne({ username });
    if (isUser) {
      res.status(409).json({ msg: "User already exist with this username" });
    }

    await User.create({
      username,
      password,
    });

    res.json({
      msg: "User created successfully",
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
      password,
    });

    if (user) {
      const token = jwt.sign(
        {
          username,
        },
        JWT_SECRET
      );

      res.json({
        token,
      });
    } else {
      res.status(409).json({ msg: "Incorrect username or password." });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic

  try {
    const response = await Course.find({});

    res.json({
      courses: response,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  try {
    const courseId = req.params.courseId;
    const username = req.username;

    // check validation
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(409).json({ msg: "User has not signed in" });
    }

    user.purchasedCourses.push(courseId);
    await user.save();

    res.json({ message: "Course purchased successfully", courseId });
  } catch (error) {
    res.status(404).json({ message: "Course purchased failed" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  try {
    const { username } = req;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Retrieve the list of purchased course IDs
    const purchasedCourseIds = user.purchasedCourses || [];

    // Fetch details of the purchased courses from the database
    const purchasedCourses = await Course.find({
      _id: { $in: purchasedCourseIds },
    });

    // Respond to the user with the fetched course details
    res.json({ purchasedCourses });
  } catch (error) {
    res.status(500).json({ msg: "Inernal Server failed" });
  }
});

module.exports = router;
