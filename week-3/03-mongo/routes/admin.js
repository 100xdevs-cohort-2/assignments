const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const newAdmin = new Admin({ username, password });

  await newAdmin.save();

  res.status(201).json({ msg: "admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { id, title, description, price, image } = req.body;

  await Course.create({
    id: id,
    title: title,
    description: description,
    price: price,
    image: image,
  });

  res.status(201).json({ msg: "course added successfully" });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => {
    res.send(courses);
  });
});

module.exports = router;
