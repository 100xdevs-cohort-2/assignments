const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rajatagrawal68:PwvJFqikSQKIwcgP@cluster0.9yw5zyy.mongodb.net/assignment-week3');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: Array
});

const CourseSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}