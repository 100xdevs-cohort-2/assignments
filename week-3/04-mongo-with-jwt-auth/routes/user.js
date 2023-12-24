const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const [username, password] = [req.body.username, req.body.password];
  if (!(username || password))
    return res.send(400, {
      message: "Username or Password is not sent in the body",
    });
  const existingUser = await User.findOne({ username: username });
  if (existingUser) return res.send(406, { message: "User already exists" });

  const newUser = new User({
    username: username,
    password: password,
  });
  newUser.save();

  res.send(201, { message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const [username, password] = [req.body.username, req.body.password];
  if (!(username || password))
    return res.send(400, {
      message: "Username or Password is not sent in the body",
    });
  const existingUser = await User.findOne({ username: username });
  if (!existingUser)
    return res.send(404, { message: "User not found, Please signup" });
  const token = "Bearer " + jwt.sign({ username: username }, jwtPassword);
  existingUser.auth_token = token;
  existingUser.save();
  res.send(200, { message: token });
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.send(200, { courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const course = await Course.findOne({ _id: req.params.courseId });
  if (!course) return res.send(404, { message: "Course not found" });
  const user = await User.findOne({
    username: jwt.decode(req.headers.authorization.replace("Bearer ", ""))
      .username,
  });
  user.purchasedCourses = course;
  user.save();
  res.send(201, { message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: jwt.decode(req.headers.authorization.replace("Bearer ", ""))
      .username,
  });
  res.send(200, { message: { purchasedCourses: user.purchasedCourses } });
});

module.exports = router;
