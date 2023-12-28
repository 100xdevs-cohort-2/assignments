const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.headers;
    await Admin.create({
      username,
      password,
    });
    res.json({ message: "Admin created successfully" });
  } catch (e) {
    console.log(e);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const { title, description, price, image } = req.headers;
    await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: image,
    });

    res.status(202).json({
      message: "Course created successfully",
      courseId: "new course id",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
    return;
  }


module.exports = router;
