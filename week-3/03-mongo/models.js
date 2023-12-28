const mongoose = require("mongoose");

const Admin = mongoose.model('Admin', {
    username: String,
    password: String
});

const Course = mongoose.model('Course', {
    title: String, 
    description: String, 
    price: Number, 
    imageLink: String,
});

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User, Admin, Course };