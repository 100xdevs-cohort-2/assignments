const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('add your mongodb connection link');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
    
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
});

const CourseSchema = new mongoose.Schema({
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