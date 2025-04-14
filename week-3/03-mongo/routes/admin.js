const { Router } = require("express");
const zod = require("zod");
const { Admin, Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
// DONE
router.post("/signup", async (req, res) => {
  try {
    await Admin.init();
    const response = await Admin.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ message: "Admin created successfully" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(500).json({
        message: `'User already exists wih the username : ${req.body.username}`,
      });
    } else res.status(500).json({ message: err });
  }
});

// DONE
router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const course = {
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  };
  const courseSchema = zod.object({
    title: zod.string().min(1),
    description: zod.string(),
    price: zod.number(),
    imageLink: zod.string().nullable().optional(),
  });
  try {
    if (!courseSchema.safeParse(course).success) {
      res.status(400).json(courseSchema.safeParse(course).error);
      return;
    }
    await Course.init();
    const newCourse = await Course.create(course);
    res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
});

// DONE
router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;