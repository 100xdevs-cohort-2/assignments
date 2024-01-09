const mongoose = require('mongoose')
const { KEY } = require('../config');

// Connect to mongoose

mongoose.connect('mongodb+srv://abhinandansinghbaghel2001:'+KEY+'@cluster0.3fjqkhz.mongodb.net/new_jwt_db_2');

// Define Schemas

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String

})

const UserSchema = new mongoose.Schema({
    // Schema definition

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