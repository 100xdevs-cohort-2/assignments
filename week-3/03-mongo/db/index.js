const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb+srv://arshhasan68:Ronaldo3010@cluster0.amu8y8b.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type : String,
        required : true
    },
    
    password: {
        type: String,
        required: true,
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type : String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true,
    }   
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 100
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