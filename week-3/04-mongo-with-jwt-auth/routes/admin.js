const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

const jwtAdminSecret = "Admin";

var id = 0;

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "New Admin k liye username password zaruri hai" });
  }

  try {
    const ExisitingAdmin = await Admin.findOne({ username: username });
    if (ExisitingAdmin) {
      return res.status(404).json({ error: "Bhai tu pehle se hi DB me hai" });
    } else {
      const newAdmin = await new Admin({
        username: username,
        password: password,
      }).save();
      res.status(200).json({ message: "Admin created successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "DB me save karne ki takleef hai :')" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(401)
      .send({ message: "Username or password jaroori hai bhaiya! " });
  }
  try {
    const existingAdmin = await Admin.findOne({ username: username });
    if (!existingAdmin) {
      res.status(404).json("Bhai pehle register toh karlo :)");
    }

    if (existingAdmin.password == password) {
      let token = jwt.sign({ username: username }, jwtAdminSecret);
      res.status(200).json({ token });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Bhai ya toh token ya toh DB ki takleef hai" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink, published } = req.body;

  if (!title || !description || !price || !imageLink || !published) {
    return res.status(400).send("Bhai course data me kuch missing hai");
  }

  id = id + 1;

  const newCourse = {
    id: id,
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
  };

  try {
    const savedCourse = await new Course(newCourse).save();
    return res.status(200).json({ message: "Bhai course added in the DB :)" });
  } catch (error) {
    res.status(500).json({ error: "Bhai DB mein save karne me takleef hai!" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const allCourses = await Course.find();
    if (allCourses) {
      res.status(200).json(allCourses);
    } else {
      res
        .status(404)
        .json({ error: "Bhai sab jagah dekh liya kuch nahi mila :(" });
    }
  } catch (error) {
    res.status(500).json({ error: "Bhai DB se fetch karne me takleef hai!" });
  }
});

module.exports = router;
