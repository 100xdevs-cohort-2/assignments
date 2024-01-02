const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../../03-mongo/db");
const router = Router();
const app = express();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const admin = await Admin.find(req.headers.username);
  if (admin) {
    throw new Error("User already exists");
  } else {
    Admin.create({
      userName: req.headers.username,
      password: req.headers.password,
    });
    res.json("User created successfully");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  let details = {
    userName: req.headers.username,
    password: req.headers.password,
  };

  const token = await jwt.sign({ details: details }, "123456");
  res.json({ token: `Bearer ${token}` });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.Admin.price,
    imageLink: req.body.imageLink,
  });
  try {
    Course.findOne({ title: req.body.title }).then((course) => {
      res.json({ message: "course Created Successfully", courseId: course.id });
    });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => res.json(courses));
});

module.exports = router;
