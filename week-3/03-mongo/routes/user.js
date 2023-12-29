const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const id = 0;

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({
      message: "Bhai registration k liye username password zaruri hai!",
    });
  }

  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    return res.status(409).json({ message: "Bhai tu DB me pehle se hi hai.." });
  }

  try {
    const newUser = await new User({
      username: username,
      password: password,
      purchased: [],
    }).save();
    if (newUser) {
      res.status(200).json({ newUser: newUser });
    }
  } catch (error) {
    res.status(500).json({ error: "Bhai DB me Save karne me takleef hai!" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  try {
    const allCourses = await Course.find();
    if (allCourses) {
      res.status(200).json(allCourses);
    }
  } catch (error) {
    res.status(500).json({ error: "Bhai DB se fetch karne me dikkat hai!" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  try {
    const courseFound = await Course.findOne({ id: purchasedCourseId });
    if (!courseFound) {
      return res
        .status(404)
        .json({ error: "Bhai je konsa nayaab course laye ho?" });
    }

    const purchaseAdded = await User.findOneAndUpdate(
      { username: req.headers.username },
      { $push: { purchased: courseFound } },
      { new: true }
    );

    if (purchaseAdded) {
      return res
        .status(200)
        .json({ message: "Bhai mubarakho, course tere me add hogya" });
    } else {
      return res
        .status(404)
        .json({ error: "Bhai user k DB me add karne me takleef hai!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Bhai DB me add karne me takleef hai!" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = req.headers.username;

  try {
    const foundUser = await User.findOne({ username: user });

    if (foundUser) {
      const purchasedCourses = foundUser.purchased;
      res.status(200).json({ purchasedCourses });
    } else {
      res.status(404).json("Bhai user hai hi ni DB mein");
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Bhai server se fetch karne me takleef hai!" });
  }
});

module.exports = router;
