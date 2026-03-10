const {Router} = require("express");
const router = Router();
const z = require("zod");
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

const validateSchema = z.object({
  username: z.email(),
  password: z.string(),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const {username, password} = req.body;
  const inputValidate = validateSchema.safeParse(req.body);
  if (!inputValidate.success) {
    return res.json({
      msg: "Please input correctly!",
    });
  }

  // Check if the user already exists
  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    return res.json({
      msg: "User already exists",
    });
  }

  const newUser = await User.create({
    username,
    password,
  });
  return res.json({
    message: "User created successfully",
    userId: newUser._id,
  });
});

router.post("/signin", async (req, res) => {
  // Implement user signup logic
  const {username, password} = req.body;
  const inputValidate = validateSchema.safeParse(req.body);
  if (!inputValidate.success) {
    return res.json({
      msg: "Please input correctly!",
    });
  }

  const user = await User.find({
    username,
    password,
  });
  if (!user) {
    return res.json({
      msg: "User doesn't exist!",
    });
  }

  const token = jwt.sign({username}, JWT_SECRET);
  return res.json({
    tokenCreated: token,
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  return res.json(allCourses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  await User.updateOne(
    {
      username: req.headers.username,
    },
    {
      "$push": {
        purchasedCourses: courseId,
      },
    }
  );
  return res.json({
    msg: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({
    username,
  }).populate('purchasedCourses');
  console.log(user)
  const myPurchasedCourses = user.purchasedCourses;
  return res.json({myPurchasedCourses})
});

module.exports = router;