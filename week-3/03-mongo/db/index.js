const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/course');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: [true, 'username is required!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required!']
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: [true, 'username is required!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required!']
    },
    purchasedCourses: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {
        type: String,
        required: [true, 'Course title is required!']
    },
    description: {
        type: String,
        required: [true, 'Course desc is required!']
    },
    price: {
        type: Number,
        required: [true, 'Course price is required!']
    },
    imageLink: {
        type: String
    },
    published: {
        type: Boolean,
        default: false
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