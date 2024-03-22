const { Admin, Course } = require("../db/index");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  // Implement admin signup logic
  Admin.create({
    username: username,
    password: password,
  });
  res.json({ msg: "mere samne jukh ke rehna padega main admin hoon" });
});

router.post("/courses", adminMiddleware, (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({ msg: "jldi kharido mera course " });
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  const response = Course.find({});

  res.json({
    courses: response,
  });

  // Implement fetching all courses logic
});

module.exports = router;
