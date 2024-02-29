const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://adeebsiddiqui77:adeebsiddiqui1234@cluster0.ibuuvog.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String
    },
    password: {
        type: String
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String
    },
    password: {
        type: String
    },
    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    imageLink: {
        type: String
    },
    published: {
        type: Boolean,
        enum: [true, false]
    },
    enrolledUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}