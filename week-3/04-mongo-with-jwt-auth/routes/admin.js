const express = require("express");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = "yourSecretKey";
// Admin Routes
<<<<<<< HEAD
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    const token = jwt.sign({ username, password }, secretKey, {
      expiresIn: "1h",
    });

    const admin = await Admin.create({ username, password, token });
    console.log("Admin created successfully");
    res.status(200).send("Admin created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating admin");
  }
});

router.post("/signin", adminMiddleware, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Admin.findOne({ username, password })
    .then((admin) => {
      if (!admin) {
        return res.status(401).send("Unauthorized: Invalid credentials");
      }

      const token = jwt.sign({ username, password }, secretKey, {
        expiresIn: "1h",
      });

      res.status(200).send(`Admin created successfully. Token: ${token}`);
    })
    .catch((error) => {
      res.status(500).send("Internal Server Error");
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;
  try {
    const course = await Course.create({
      title,
      description,
      price,
      image: imageLink,
    });
    res.status(200).send("Course created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating admin");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json(courses).send;
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> 44221a6567c34bcb8321268b6c0180e2a2a48d63
});

module.exports = router;
