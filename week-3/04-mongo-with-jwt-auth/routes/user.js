const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { SignInSchema, SignUpSchema } = require("../validators");
const { User, Course } = require("../db/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const validator = SignUpSchema.safeParse({ username, password });
  if (!validator.success) {
    return res.status(400).json(validator.error.flatten());
  }

  const userExists = await User.findOne({ username: username }).exec();
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = new User({
    username: username,
    password: hashedPassword,
  });

  await user.save();

  return res.status(201).json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const validator = SignInSchema.safeParse({ username, password });
  if (!validator.success) {
    return res.status(400).json(validator.error.flatten());
  }

  const user = await User.findOne({ username: username }).exec();
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials!",
    });
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials!",
    });
  }

  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_PASSWORD);

  return res.json({ token: token });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find(
    {},
    { title: 1, description: 1, price: 1, imageLink: 1, _id: 1 }
  );
  res.json({ courses: courses });
});

function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim().length === 0) return true;
  if (typeof value === "object" && value.length > 0) return false;
}

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const user = await User.findOne({ username: req.user.username }).exec();
  const purchasedCourses = user.purchasedCourses;

  if (!isEmpty(purchasedCourses) && purchasedCourses.includes(courseId)) {
    return res.status(400).json({
      message: "You already purchased this course",
    });
  } else {
    purchasedCourses.push(courseId);
    user.updateOne(
      {},
      {
        $set: {
          purchasedCourses: purchasedCourses,
        },
      }
    );
    user.save();

    return res.json({
      message: "Course purchased successfully",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).exec();

  const courses = await Course.find({
    _id: { $in: user.purchasedCourses },
  }).exec();

  return res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
