const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pritesh:Gp4BUODYZcdCW3Je@cluster0.czlj40h.mongodb.net/');

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
    descriiption: String,
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