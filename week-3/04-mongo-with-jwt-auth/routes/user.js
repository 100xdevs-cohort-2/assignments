const { Router } = require("express");
const express = require("express"); // Move this line up
const router = express.Router();
const userMiddleware = require("../middleware/user");
const app = express();
const { User } = require("../db/index");
const { Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const secretKey = "youruserKey";
// User Routes
<<<<<<< HEAD
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  try {
    const token = jwt.sign({ username, password }, secretKey, {
      expiresIn: "1h",
    });
    const user = await User.create({ username, password, token });
    res.status(200).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

router.post("/signin", userMiddleware, (req, res) => {
  const { username, password } = req.headers;
  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        const token = jwt.sign({ username, password }, secretKey, {
          expiresIn: "1h",
        });
        req.user = user;
        res.status(200).send(`User created successfully. Token: ${token}`);
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => {
      console.error("Error authenticating user:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json(courses).send;
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const course = await Course.findOne({ _id: courseId });

  // Check if the course is found
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  // Now finding user and updating
  const username = req.user.username; // Assuming your user middleware adds username to req

  const updatedUser = await User.findOneAndUpdate(
    { username: username },
    {
      $push: {
        purchasedCourses: {
          courseId: course._id,
          title: course.title,
          description: course.description,
          price: course.price,
          imageLink: course.image,
          // You can add more details about the purchase here if needed
        },
      },
    },
    { new: true } // To return the updated document
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found error" });
  }

  res.json({ course, user: updatedUser });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.user.username; // Assuming your user middleware adds username to req

  // Find the user by username
  User.findOne({ username })
    .then((user) => {
      // Check if the user is found
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Retrieve the purchasedCourses array from the user
      const purchasedCourses = user.purchasedCourses || [];

      // Example: Send the purchased courses in the response
      res.json({ purchasedCourses });
    })
    .catch((error) => {
      console.error("Error finding user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

module.exports = router;
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> 44221a6567c34bcb8321268b6c0180e2a2a48d63
