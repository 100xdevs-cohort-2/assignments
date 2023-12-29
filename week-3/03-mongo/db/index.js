const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    made_courses : {
        type : [Number],
        default : []
    }
});

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    courses : {
        type : [Number],
        default : []
    }
});

const CourseSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    imageLink : {
        type : String,
        required : true
    },
    published : {
        type : Boolean,
        required : true,
        default : true
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