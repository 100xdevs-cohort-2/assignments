const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhay1234:*********@cluster1.l2dt7dg.mongodb.net/AssignmentDatabase');

// Define schemas

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourse: Array
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
});



const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}