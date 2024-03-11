const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("YOUR_URL");

// Define schemas
const AdminSchema = new mongoose.Schema(
  {
    // Schema definition here
    // The admin should provide the credentials to create account and should be able to see the courses he has created.
    // To show the courses he has created, we need to pass the reference of the CourseSchema.
    // For this, set the type field as mongoose.Schema.Types.ObjectId to show the custom defined field and pass the reference of the Course as the field.
    // Apart from the credentials, pass one more object named timestamps for the AdminSchema.
    // Adding timestamps helps to keep track of creation and updation of the data.

    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      length: 8,
    },
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    // Schema definition here
    // The user should provide the credentials to create account and should be able to see the courses he has purchased.
    // To show the courses he has purchased, we need to pass the reference of the CourseSchema.
    // For this, set the type field as mongoose.Schema.Types.ObjectId to show the custom defined field and pass the reference of the Course as the field.
    // Apart from the credentials, pass one more object named timestamps for the UserSchema.
    // Adding timestamps helps to keep track of creation and updation of the data.

    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      length: 8,
    },
    purchasedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  // The courses should be unique, displaying the price and having an image.
  // Storing files like videos, images and pdfs makes the database heavy.
  // To overcome this, store the links of these files in the database.

  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
