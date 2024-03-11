const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://yashagrawal946:Pl7Yx4tT3SDAJBmI@cluster0.rnew19r.mongodb.net/course_selling_app2');

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
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'   
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema,'admins');
const User = mongoose.model('User', UserSchema,'users');
const Course = mongoose.model('Course', CourseSchema,'courses');

module.exports = {
    Admin,
    User,
    Course
}