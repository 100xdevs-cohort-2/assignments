const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const [username, password] = [req.body.username, req.body.password];
  if (!(username || password))
    return res.send(404, {
      message: "Username and Password is not sent in body ",
    });
  const existingAdmin = await Admin.findOne({ username: username });
  if (existingAdmin) return res.send(406, { message: "Admin already exists" });

  const newAdmin = new Admin({ username: username, password: password });
  newAdmin.save();
  res.send(201, { message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const [username, password] = [req.body.username, req.body.password];

  const existingAdmin = await Admin.findOne({ username: username });
  if (!existingAdmin) return res.send(404, { message: "Admin not found" });

  const token = "Bearer " + jwt.sign({ username: username }, jwtPassword);
  existingAdmin.auth_token = token;
  existingAdmin.save();

  res.send(400, { token: token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const token = req.headers.authorization.replace("Bearer ", "");
  const decodedToken = jwt.decode(token);
  const admin = await Admin.findOne({ username: decodedToken.username });

  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    published: true,
    createdBy: admin.username,
  });

  const savedCourse = await course.save();
  res.send(201, {
    message: "Course created successfully",
    courseId: savedCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.send(200, { courses: courses });
});

module.exports = router;
