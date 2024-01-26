const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const { username, password } = req.body;

  try {
    // Check if user with the same username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this username already exists" });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in user signup:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  try {
    // Fetch all published courses
    const courses = await Course.find({ published: true });
    res.json({ courses });
  } catch (error) {
    console.error("Error in listing all courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const { user } = req; // Access the authenticated user from the request

  try {
    const courseId = req.params.courseId;

    // Check if the course exists and is published
    const course = await Course.findOne({ _id: courseId, published: true });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the user already purchased the course
    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ message: "Course already purchased" });
    }

    // Add the course to the user's purchasedCourses
    user.purchasedCourses.push(courseId);
    await user.save();

    res.json({ message: "Course purchased successfully" });
  } catch (error) {
    console.error("Error in course purchase:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const { user } = req; // Access the authenticated user from the request

  try {
    // Populate user's purchasedCourses with course details
    const purchasedCourses = await Course.find({
      _id: { $in: user.purchasedCourses },
    });
    res.json({ purchasedCourses });
  } catch (error) {
    console.error("Error in fetching purchased courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
