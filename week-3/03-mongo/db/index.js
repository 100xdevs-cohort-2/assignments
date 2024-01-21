const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');
// mongo db link not included in github for security

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    user: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    user: String,
    password: String,
    purchasedCourses: [
        {
           type: mongoose.Schema.Types.objectID,
           ref: 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}