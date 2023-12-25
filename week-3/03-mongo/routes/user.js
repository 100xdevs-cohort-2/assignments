const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  try {
    const { username, password } = req.headers;

    const existingUser = await User.findOne({ username: username });
    if (existingUser)
      return res
        .status(401)
        .json({ msg: "User Already Exists, Pls login from your credentials" });

    const newUser = await User.create({
      username: username,
      password: password,
    });

    res.status(200).json({ msg: "New User Created" + newUser.userName });
  } catch (err) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find();
    res.status(200).json({ allCourses });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
