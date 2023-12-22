const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

//! Admin Routes

//TODO :  Implement admin signup logic
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    await Admin.create({
      username,
      password,
    });

    res.status(200).json({ msg: "new admin created succesfully !" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//TODO :  Implement course creation logic
router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink, published } = req.body;

  const createdBy = req.headers.username;

  try {
    await Course.create({
      title,
      description,
      price,
      imageLink,
      published,
      createdBy,
    });
    res.status(200).json({ msg: "new course created succesfully !" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//TODO : Implement course accessing logic
router.get("/courses", adminMiddleware, async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json(courses);
});

module.exports = router;
