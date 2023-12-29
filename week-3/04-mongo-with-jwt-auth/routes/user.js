const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(409).json({ message: "User Already Exists" });
    return;
  }

  try {
    const hashedPass = await bcrypt.hash(password, 5);
    await User.create({
      username: username,
      encryptedpassword: hashedPass,
      password: password, // Added just for testing, should not be added in actual scenario
    });
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.post("/signin", async (req, res) => {
  // Implement User signup logic
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    res.status(404).json({ message: "User does not Exists" });
    return;
  }

  const correctPass = await bcrypt.compare(
    password,
    existingUser.encryptedpassword
  );
  if (!correctPass) {
    res.status(401).json({ message: "Wrong Password" });
    return;
  }

  const signature = jwt.sign(username, process.env.JWT_PASSWORD);
  res.status(200).json({ signature });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses: courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courseId = req.params.courseId;
    const username = req.locals;
    const course = await Course.findOne({ _id: courseId });
    if (!course) {
      res.status(404).json({ message: "Course does not Exists" });
      return;
    }
    await User.updateOne(
      { username: username },
      { $push: { purchasedCourses: courseId } },
      { upsert: true }
    );
    res.status(200).json({ message: "Course purchased successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const username = req.locals;
    const user = await User.findOne({ username: username });

    //DIFFICULT WAY TO FIND PURCHASED COURSES
    // const purchasedCoursesId = user.purchasedCourses;

    // const purchasedCourses = await Promise.all(
    //   purchasedCoursesId.map(async (courseId) => {
    //     return await Course.findOne({ _id: courseId });
    //   })
    // );
    const purchasedCourses = await Course.find({
      _id: { $in: user.purchasedCourses },
    });
    res.status(200).json({ purchasedCourses: purchasedCourses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
