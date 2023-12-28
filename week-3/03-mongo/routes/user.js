const { Router } = require("express");
const express = require("express"); // Move this line up
const router = express.Router();
const userMiddleware = require("../middleware/user");
const app = express();
const { User } = require("../db/index");
const { Course } = require("../db/index");
// User Routes
app.post("/signup", (req, res) => {
  // Implement user signup logic
});

app.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

app.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

app.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
