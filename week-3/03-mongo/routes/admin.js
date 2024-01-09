const express = require("express");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");
const app = express();
const router = express.Router();
// Admin Routes
app.post("/signup", (req, res) => {
  // Implement admin signup logic
});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
