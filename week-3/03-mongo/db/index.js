const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://swasth319:0n3zjDv1KMXiDIok@cluster0.oqytlgg.mongodb.net/course_app");

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedcourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imagelink: String
});

const Admin = mongoose.model('admins', AdminSchema);
const User = mongoose.model('users', UserSchema);
const Course = mongoose.model('courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}