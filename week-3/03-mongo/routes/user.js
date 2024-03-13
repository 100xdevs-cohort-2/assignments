const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const userNotExists = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", userNotExists, async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  // const user = new User({username : username,password : password});
  // user.save();
  //ABOVE AND BELOW ARE SAME
  await User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  try {
    let allCourses = await Course.find({});
    res.json({
      courses: allCourses,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  await User.updateOne({
    username: username
}, {
    "$push": {
        purchasedCourses: courseId
    }
})
// purchasedCourses.push(courseId)            -----> to check this

  // const course = await Course.findById(courseId);
  // if (!course) {
  //   return res.status(404).json({
  //     error: "Course not found",
  //   });
  // }
  // const user = await User.findOne({ username: username });
  // user.purchasedCourses.push(courseId);
  // user.save();
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({ username: username });
  
  // const purchasedCourses = user.purchasedCourses;
  // res.json({
  //   purchasedCourses: purchasedCourses,
  // });

  const courses = await Course.find({
    _id: {
        "$in": user.purchasedCourses
    }
  });

  res.json({
      courses: courses
  })
});

module.exports = router;
