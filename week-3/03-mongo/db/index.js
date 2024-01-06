const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb+srv://abhinandansinghbaghel2001:cYfhJfMRLe23S7Ln@cluster0.3fjqkhz.mongodb.net/new_db');

// mongodb+srv://abhinandansinghbaghel2001:cYfhJfMRLe23S7Ln@cluster0.3fjqkhz.mongodb.net/ 
// this is the default connection string
// add /Course_Selling_App at the end to make a new database of this name






//Define Schemas

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});


const UserSchema = new mongoose.Schema({
    // Schema definition here

    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


module.exports = {
    Admin,
    User,
    Course
}