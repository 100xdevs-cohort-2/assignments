const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb+srv://prajwalsomalkar025:VYZuWElRSGQ0r9wd@clustercohort.bednah4.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    adminUsername: String,
    adminPassword: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description:String,
    price :Number,
    imageLink :String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}


