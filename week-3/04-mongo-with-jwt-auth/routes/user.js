const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../../03-mongo/db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    userName: req.headers.username,
    passeord: req.headers.password,
  });
  res.json("User created successfully");
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  let details = {
    userName: req.headers.username,
    password: req.headers.password,
  };

  const token = jwt.sign({ details: details }, "123456");
  res.json({ token: token });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((courses) => res.json(courses));
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
