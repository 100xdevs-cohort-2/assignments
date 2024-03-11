const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Admin, User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    const existsadmin = await User.findOne({ username: username });
    if (existsadmin) {
      return res.json({
        msg: "User already exists",
      });
    }

    await User.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(404).json({
      msg: "Something went wrong",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    const existsadmin = await User.findOne({ username: username });
    if (!existsadmin) {
      return res.json({
        msg: "Please create your account",
      });
    }

    const token = jwt.sign({ username }, JWT_SECRET);

    res.json({
      "Your Token": token,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Something went wrong",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;

  //finding the username
  const token = req.headers.authorization;
  const username = await findingUsername(token);

  await User.updateOne({username},{
    $push:{
        purchasedCourses: courseId
    }
  });
  res.json({ msg: "Purchase completed" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const token = req.headers.authorization;
  const username = findingUsername(token);

  const user = await User.findOne({username:username});

  const courses = await Course.find({
    _id:{
        $in: user.purchasedCourses
    }
  });

  res.json({ courses });
});

function findingUsername(token){
  const words = token.split(" ");
  const jwttoken = words[1];
  const decodeValue = jwt.verify(jwttoken, JWT_SECRET);
  const username = decodeValue.username;
  return username;
}

module.exports = router;
