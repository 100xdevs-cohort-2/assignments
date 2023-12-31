const { Router } = require("express");
const { Admin, Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const { courseSchema, userSchema } = require("../schema");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Validate request body data.
  const validatedData = userSchema.safeParse({ username: username, password: password });
  if (!validatedData.success) {
    return res.status(400).json(validatedData.error.format());
  }

  // Check if admin with the given username already exists in the database.
  const admin = await Admin.findOne({ username: username });
  if (admin) {
    return res.status(400).json({ error: "Username already in use" });
  }

  // Create new admin in the database.
  await Admin.create({ username: username, password: password });
  res.status(201).json({ message: "Admin created successfully" });
});

adminRouter.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;

  // Validate request body data.
  const validatedData = courseSchema.safeParse({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });
  if (!validatedData.success) {
    return res.status(400).json(validatedData.error.format());
  }

  // Create new course.
  const course = await Course.create({ title: title, description: description, price: price, imageLink: imageLink });
  res.status(201).json({ message: "Course created successfully", courseId: course.id });
});

adminRouter.get("/courses", adminMiddleware, async (req, res) => {
  // Get all the courses and exclude "__v" feild from each course document.
  const courses = await Course.find({}, "-__v");
  res.json(courses);
});

module.exports = adminRouter;
