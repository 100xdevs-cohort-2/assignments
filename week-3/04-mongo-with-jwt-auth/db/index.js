const mongoose = require('mongoose');
const {jwtPassWord} = require("../config"); 
const {mongoConnectionString} = require("../config"); 
// Connect to MongoDB
mongoose.connect(mongoConnectionString);


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
    purchasedCourses : [
        {
            title : String, 
            description : String, 
            price : String, 
            imageLink : String
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String, 
    description : String, 
    price : String, 
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}