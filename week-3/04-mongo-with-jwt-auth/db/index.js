const mongoose = require('mongoose');
// const DB_url = require('../config.js')

// Connect to MongoDB
// mongoose.connect(DB_url);1
mongoose.connect("mongodb+srv://root:admin@cluster0.lz5uy4y.mongodb.net/");


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    courseId:{
        type: Number
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    courseId:{
        type: Number
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    titile:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    img:{
        type: String,
        require: true
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