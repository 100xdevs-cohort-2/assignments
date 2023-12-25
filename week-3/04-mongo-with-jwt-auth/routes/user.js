const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  try {
    // check if user exists
    const userExists = await User.findOne({ username: username });

    if (userExists) {
      return res.status(400).json("User already exists!");
    }

    await User.create({ username: username, password: password });
    res.json("User created successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  //   const { username, password } = req.body;
  try {
    // create jwt token for the user
    // console.log(process.env.JWT_SECRETKEY);
    const token = JWT.sign(
      { username: req.body.username, password: req.body.password },
      process.env.JWT_SECRETKEY
    );

    return res.json({ token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  try {
    return res.status(200).send({ courses: await Course.find() });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  //   const { username, password } = req.headers;
  //   console.log(courseId);
  try {
    // get username from token
    const token = req.headers.authorization?.split(" ")[1];

    const { username } = JWT.decode(token);

    // check if course exists
    const courseExists = await Course.findById(courseId);
    if (courseExists == null) {
      return res
        .status(404)
        .json({ message: "Course not found" }, courseExists);
    }

    // Find logged in User from db
    let loggedInUser = await User.findOne({
      username: username,
    });
    console.log(loggedInUser);
    loggedInUser.purchasedCourses.push(courseExists);
    loggedInUser.save();

    return res.status(200).json({
      message: "Course purchased successfully",
      courseId: courseExists._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const token = req.headers.authorization?.split(" ")[1];

  const { username } = JWT.decode(token);

  try {
    // find user
    const user = await User.findOne({
      username: username,
    });

    const userCourse = await User.findById(user._id).populate(
      "purchasedCourses"
    );
    // console.log(userCourse);

    return res
      .status(200)
      .send({ purchasedCourses: userCourse.purchasedCourses });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
