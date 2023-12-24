const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345678";
const app = express();
app.use(express.json());
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://KoyalkarAditya:Koyalkaraditya123@cluster0.neturz7.mongodb.net/course-app-auth"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  courseName: String,
  courseId: String,
  description: String,
  price: String,
  purchased: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

async function adminMiddleWare(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let adminExsists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (adminExsists) {
    res.json({
      msg: "admin already exists with required credintials",
    });
  } else {
    next();
  }
}
async function courseMiddleaWare(req, res, next) {
  let courseName = req.body.courseName;
  let courseId = req.body.courseId;
  let courseExits = await Course.findOne({
    courseName: courseName,
    courseId: courseId,
  });
  if (courseExits) {
    res.json({
      msg: "course already exits ",
    });
  } else {
    next();
  }
}
async function userMiddleWare(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let userExits = await User.findOne({
    username: username,
    password: password,
  });
  if (userExits) {
    res.json({
      msg: "users already exits with required credentials",
    });
  } else {
    next();
  }
}

app.post("/admin/signup", adminMiddleWare, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "Admin created sucessfully",
  });
});
app.post("/admin/signin", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    {
      username: username,
      password: password,
    },
    jwtPassword
  );
  res.json({
    token: token,
  });
});
app.post("/admin/courses", courseMiddleaWare, (req, res) => {
  const token = req.headers.authorization;
  let username = req.body.username;
  let password = req.body.password;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    let courseName = req.body.courseName;
    let courseId = req.body.courseId;
    let description = req.body.description;
    let price = req.body.price;
    Course.create({
      courseName: courseName,
      courseId: courseId,
      description: description,
      price: price,
      purchased: false,
    });
    res.json({
      msg: "course created successfully",
    });
  } catch (err) {
    res.json({
      msg: "Athorisation err",
    });
  }
});
app.get("/admin/courses", (req, res) => {
  let token = req.headers.authorization;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    Course.getAll().then((courses) => {
      res.json(courses);
    });
  } catch (err) {
    res.json({
      msg: "Autharization err",
    });
  }
});
app.post("/users/signup", userMiddleWare, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "User created successfully",
  });
});
app.post("/users/signin", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let token = jwt.sign(
    {
      username: username,
      password: password,
    },
    jwtPassword
  );
  res.json({
    token: token,
  });
});
app.get("/users/courses", (req, res) => {
  let token = req.headers.authorization;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    Course.find().then((courses) => {
      res.json(courses);
    });
  } catch (err) {
    res.json({
      msg: "Athurization err",
    });
  }
});
app.post("/users/courses/:courseId", (req, res) => {
  let token = req.headers.authorization;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    let courseId = req.params.courseId;
    Course.findOneAndUpdate(
      {
        courseId: courseId,
      },
      {
        purchased: true,
      }
    );
  } catch (err) {
    res.json({
      msg: "Athorization err",
    });
  }
});
app.post("/users/courses/purchasedCourses", (req, res) => {
  let token = req.headers.authorization;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    Course.find()
      .$where({ purchased: true })
      .then((purchases) => {
        res.json(purchases);
      });
  } catch (err) {
    res.json({
      msg: "Athorization err",
    });
  }
});
app.listen(3000, () => {
  console.log("listening at port 3000");
});
module.exports = {
  Admin,
  User,
  Course,
};
