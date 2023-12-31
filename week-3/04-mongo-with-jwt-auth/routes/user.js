const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { Course, User } = require("../db/index");
const userMiddleware = require("../middleware/user");
const { userSchema } = require("../schema");

const jwtPassword = process.env.JWT_PASSWORD;

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Validate request body data.
  const validatedData = userSchema.safeParse({ username: username, password: password });
  if (!validatedData.success) {
    return res.status(400).json(validatedData.error.format());
  }

  // Check if admin with the given username already exists in the database.
  const user = await User.findOne({ username: username });
  if (user) {
    return res.status(400).json({ error: "Username already in use" });
  }

  // Create new admin in the database.
  await User.create({ username: username, password: password });
  res.status(201).json({ message: "User created successfully" });
});

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  // Validate request body data.
  const validatedData = userSchema.safeParse({ username: username, password: password });
  if (!validatedData.success) {
    return res.status(400).json(validatedData.error.format());
  }

  // Check if user with the given username already exists in the database.
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ username: username, password: password }, jwtPassword);
  res.json({ token: token });
});

userRouter.get("/courses", userMiddleware, async (req, res) => {
  // Get all the courses and exclude "__v" feild from each course document.
  const courses = await Course.find({}, "-__v");
  res.json(courses);
});

userRouter.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Check if the course corresponding to the course id exists
  const user = req.user;
  const course = await Course.findById(req.params.courseId);
  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  // Check if course is already purchased.
  if (user.purchasedCourses.includes(course.id)) {
    return res.status(400).json({ error: "Course already purchased" });
  }

  // Add the course to the user's purchased courses.
  user.purchasedCourses.push(course.id);
  user.save();

  res.status(200).json({ message: "Course purchased successfully" });
});

userRouter.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Get all the purchased courses of the user.
  const user = await req.user.populate("purchasedCourses", "-__v");
  res.json({ purchasedCourses: user.purchasedCourses });
});

module.exports = userRouter;
