const { Router } = require("express");
const router = Router();
const { userMiddleware, checkCourseAvailable } = require("../middleware/user");
const { User, Course, PurchasedCourses } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  let createNewUser = new User({ username, password });
  createNewUser
    .save()
    .then(() => res.status(200).json({ message: "User created successfully" }));
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const listOfAllCourses = await Course.find();

  if (listOfAllCourses.length > 0) {
    res.send({ courses: listOfAllCourses });
  } else {
    res.json({ message: "currently no course is available on portal" });
  }
});

router.post(
  "/courses/:courseId",
  userMiddleware,
  checkCourseAvailable,
  (req, res) => {
    res.json({
      message: "Course purchased successfully",
    });
  }
);

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  let listOfPurchasedCourses = await PurchasedCourses.find();
  if (listOfPurchasedCourses.length > 0) {
    res.json({
      courses: listOfPurchasedCourses,
    });
  } else {
    res.json({
      message: `No course is purchased by user ${req.headers.username}`,
    });
  }
});

module.exports = router;
