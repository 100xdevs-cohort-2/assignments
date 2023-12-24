const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../../03-mongo/db");
const router = Router();
const app = express();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    userName: req.headers.username,
    passeord: req.headers.password,
  });
  res.json("User created successfully");
});

router.post("/signin", (req, res) => {
  // Implement admin signin logic
  let details = {
    userName: req.headers.username,
    password: req.headers.password,
  };

  const token = jwt.sign({ 'details': details }, "123456");
  res.json({ token: token });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.Admin.price,
    imageLink: req.body.imageLink,
  });
  Course.findOne({ title: req.body.title }).then((course) => {
    res.json({ message: "course Created Successfully", courseId: course.id });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => res.json(courses));
});

module.exports = router;
