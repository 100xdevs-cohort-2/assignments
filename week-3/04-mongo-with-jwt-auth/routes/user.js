const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const router = Router();
const secret = "secret";

const exists = async (username) => {
  const result = await User.findOne({ username: username });
  return result ? true : false;
};

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (await exists(username)) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      purchasedCourses: [],
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const exist = await exists(username);
    if (!exist) {
      return res.status(400).json({ error: "user does not exist!" });
    }

    const user = await User.findOne({ username: username });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ err: "Authentication failed: incorrect password." });
    }
    const token = jwt.sign(username, secret);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Error fetching courses" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user.id;
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Logic to record the purchase
    await User.updateOne(
      { _id: userId },
      {
        $addToSet: {
          purchasedCourses: [...req.user.purchasedCourses, courseId],
        },
      }
    );

    res.status(200).json({ message: "Course purchased successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error purchasing course" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId).populate("purchasedCourses");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Logic to fetch purchased courses
    const purchasedCourses = user.purchasedCourses;

    res.status(200).json({ purchasedCourses });
  } catch (error) {
    res.status(500).json({ error: "Error fetching purchased courses" });
  }
});

module.exports = router;
