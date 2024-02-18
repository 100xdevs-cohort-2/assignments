const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhay1234:bUcZ2mcjfIITXnkZ@cluster1.l2dt7dg.mongodb.net/AssignmentJWT');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    authenticationToken: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    authenticationToken: String,
    purchasedCourse: Array
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}