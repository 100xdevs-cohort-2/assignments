const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://yashhegde010:v9GBw4GX03vl8NCu@cluster0.clkvine.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    adminname: String,
    adminpassword: String,
    adminCourses: Array,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: Array,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId: Number,
    courseTiltle: String,
    courseDescription: String,
    price: Number,
    published: Boolean,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}