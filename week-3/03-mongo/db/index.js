const { link } = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { log } = require('console');

// Configure dotenv to load variables from .env file
const result = dotenv.config();
// console.log(process.env.MONGODB_URI)
// console.log(process.env.DB_NAME)

// Connect to MongoDB
// console.log(`${process.env.MONGODB_URI}` + `${process.env.DB_NAME}`);
mongoose.connect(`${process.env.MONGODB_URI}` + `${process.env.DB_NAME}`);


// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imglink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}