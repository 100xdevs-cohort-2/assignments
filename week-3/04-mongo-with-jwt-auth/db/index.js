const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Zubairkhan1@cluster0.sbrgvn8.mongodb.net/');


const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    imageLink: String,
    description: String,
    price: String
});
// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    coursePurchased:{
        type: mongoose.Schema.Types.ObjectID
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