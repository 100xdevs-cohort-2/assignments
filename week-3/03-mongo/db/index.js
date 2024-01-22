const mongoose = require('mongoose');
const { stringify } = require('querystring');

// Connect to MongoDB
mongoose.connect('mongodb+srv://2022uee0148:sq6N8u8xq4vMpGVe@cluster0.gww4f1j.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,  
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]  
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    imageLink : String ,
    price : Number 

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}