const { Router } = require("express");
const router = Router();
const { Admin, User } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const JWT_Secret = require("..");

// User Routes
router.post("/signup", async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   await Admin.create({
//     username,
//     password,
//   });

//   res.json({
//     msg: "Admin Created successfully",
//   });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
//   const username = req.body.username;
//   const password = req.body.password;

//   const user = await User.find({
//     username,
//     password,
//   });

//   if (user) {
//     const token = jwt.sign(
//       {
//         username,
//       },
//       JWT_Secret
//     );
//     res.json({ token });
//   } else {
//     res.status(411).json({
//       msg: "Incorrect Email or Password",
//     });
//   }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
