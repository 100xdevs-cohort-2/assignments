const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://narottamishra67:2L8CPhISitEUl63e@cluster0.wwhjhpq.mongodb.net/edtech-app");

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    publishedCourses: [Number]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [Number]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: Number,
    title: String,
    description: String,
    price : Number,
    imageLink : String,
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