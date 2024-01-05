const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://abdul:91oFy8etusfqQ3a5@cluster0.argigth.mongodb.net/course")

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,ref:"Course"
    }]
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,ref:"Course"
    }]
});

const CourseSchema = new mongoose.Schema({
title:String,
description:String,
price:Number,
image:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}


