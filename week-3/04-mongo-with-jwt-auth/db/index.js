const { link } = require('fs');
const mongoose = require('mongoose');

const { MONGODB_URI, DB_NAME } = require("../envData.js")

// Connect to MongoDB
// console.log(`${MONGODB_URI}` + `${DB_NAME}`);
mongoose.connect(`${MONGODB_URI}` + `${DB_NAME}`);


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