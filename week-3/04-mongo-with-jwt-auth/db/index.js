const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pritesh:Gp4BUODYZcdCW3Je@cluster0.czlj40h.mongodb.net/jwtcourses');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    
    username: String,
    password: String
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here

    username: String,
    password : String,
    purchasedcourses:[{
        type : mongoose.Schema.Types.ObjectId,
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

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}