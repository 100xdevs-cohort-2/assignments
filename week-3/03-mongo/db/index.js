// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// app.use(express.json());

// mongoose.connect(
//   ""
// );

// const User = mongoose.model("Users", {
//   name: String,
//   email: String,
//   password: String,
// });

// app.post("/sign-up", async function (req, res) {
//   const userName = req.body.name;
//   const userEmail = req.body.email;
//   const userPassword = req.body.password;

//   const userExists = await User.findOne({ name: userName });

//   if (userExists) {
//     console.log("User exists");
//     res.json({
//       msg: "User exists",
//     });
//     return res.status(400).send("User name already exists");
//   }

//   const user = new User({
//     name: userName,
//     email: userEmail,
//     password: userPassword,
//   });

//   user
//     .save()
//     .then(() => {
//       console.log("User saved successfully");
//       mongoose.disconnect(); // Disconnect from the database after saving
//     })
//     .catch((error) => {
//       console.error("Error saving user:", error);
//       mongoose.disconnect(); // Disconnect from the database in case of an error
//     });
// });

// app.listen(3000);

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  ""
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
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
