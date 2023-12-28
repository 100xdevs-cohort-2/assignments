const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course,mongoose } = require("../db/index.js");

const { z } = require("zod");

const userSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
  name: z.string(),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const validate = userSchema.safeParse(req.body);
  if (!validate.success) {
    console.log(validate.error);
    return res.status(500).send({
      message: "please provide all required fields with correct data type",
      error: validate.error.errors.map(
        (err) => err.path[0] + " input is invalid: " + err.message
      ),
    });
  }
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  const courseList = await Course.find();
  if (!courseList) {
    res.status(404).send({ message: "No courses found" });
  }
  res
    .status(200)
    .send({ message: "Courses fetched successfully", courses: courseList });
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = new mongoose.Types.ObjectId(req.params.courseId);
  const username = req.headers["username"];

  try {
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send({ message: "Course not found" });
    }
    const user = await User.findOne({username:username}).exec();
    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).send({ message: "Course already purchased" });
    }
    user.purchasedCourses.push(courseId);
    await user.save();
    res
      .status(200)
      .send({
        message: "Course purchased successfully",
        courseId: courseId,
        courseName: course.title,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }

  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers["username"];
  try {
    
    const user = await User.findOne({username:username}).exec();
    if (!user.purchasedCourses || user.purchasedCourses.length === 0) {
      return res
        .status(404)
        .send({ message: "User not found or no purchased courses" });
    }
    res
      .status(200)
      .send({
        message: "Courses fetched successfully",
        courses: user.purchasedCourses,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
  // Implement fetching purchased courses logic
});

module.exports = router;
