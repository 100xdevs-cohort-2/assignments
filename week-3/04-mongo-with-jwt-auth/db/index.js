const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type: 'string',
        required: true
    },
    password : {
        type: 'string',
        required: true,
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type: 'string',
        required: true,
    },
    password : {
        type: 'string',
        required: true,
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}