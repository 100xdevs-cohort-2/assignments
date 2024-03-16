const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:12345678910@cluster0.nctvbbi.mongodb.net/userAppNew');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password: String,
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});
 
const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
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