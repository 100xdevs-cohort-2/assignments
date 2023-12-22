const { Router } = require("express");
const express = require("express"); // Move this line up
const router = express.Router();
const userMiddleware = require("../middleware/user");
const app = express();
const { User } = require("../db/index");
const { Course } = require("../db/index");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(200).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
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
  //now finding user and updating
  const userId = req.user.id; // Assuming your user middleware adds user to req
  const updatedUser = await User.findByIdAndUpdate(
    userId,
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
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ course, user: updatedUser });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const userId = req.user.id;

  // Find the user by ID
  User.findById(userId)
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
