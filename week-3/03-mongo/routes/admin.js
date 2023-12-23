const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const user = Admin.create({
    username: req.headers.username,
    password: req.headers.password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
});

module.exports = router;
