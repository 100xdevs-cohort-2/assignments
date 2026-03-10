const {Router} = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const {username, password} = req.body;

  const user = await User.findOne({
    username,
    password,
  });

  if (user) {
    return res.status(400).json({
      msg: "User already exists!",
    });
  }

  await User.create({
    username,
    password,
  });
  return res.status(201).json({
    msg: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const {username, password} = req.headers;
  const userCourses = await User.findOne({
    username,
    password,
  });
  return res.status(200).json({
    courses: userCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  return res.json({
    msg: "Course purchased successfully"
  })
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    const userCourses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    return res.json({
        courses: userCourses
    })
});

module.exports = router;
