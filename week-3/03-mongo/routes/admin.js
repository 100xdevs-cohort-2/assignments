const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic

  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
