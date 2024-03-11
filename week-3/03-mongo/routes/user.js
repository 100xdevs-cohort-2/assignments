const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    const existingUser = await User.findOne({ username, password });

    if (existingUser) {
      return res.json({ msg: "User already exists" });
    }

    // create a new user
    await User.create({ username, password });

    res.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", async (req, res) => {
  try {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({ courses: response });

  } 
  catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
      { username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );

    res.json({ msg: "Purchase completed" });
  } catch (error) {
    console.error("Error during course purchase:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ username: req.headers.username });
    
    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
    res.json({ courses });

  } 
  catch (error) {
    console.error("Error fetching purchased courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
