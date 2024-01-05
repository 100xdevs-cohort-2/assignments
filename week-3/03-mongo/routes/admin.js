const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const users = require("..");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  try {
    await Admin.create({
      username: username,
      password: password,
    });
    return res.status(201).send({
      message: "Admin created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating admin account", error: error });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;
  if(!title || !description || !price || !imageLink){
    return res.status(400).send({message:"All fields are required!"})
  }
  try {
    const admin = await Admin.findById(req.admin._id);
    const course = await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
      published: true,
      owner: admin.username,
    });
    admin.courses.push(course._id);
    await admin.save();
    return res.status(201).send({
      message: "Course created successfully",
      courseId: course._id,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating course", error: error });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const admin = await Admin.findById(req.admin._id).populate("courses");
    return res.status(200).send({ courses: admin.courses });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error fetching courses", error: error });
  }
});

module.exports = router;
