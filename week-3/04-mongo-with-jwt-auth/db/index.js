const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongo-intro');
console.log("Connected to Mongo DB")
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    auth_token : String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id : Number,
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    auth_token : String,
    purchasedCourses : [CourseSchema]
});


const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}