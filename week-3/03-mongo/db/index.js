const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://codewithritiks:Singh1999@cluster0.wwndxnz.mongodb.net/random')
.then(() => {console.log('Databse connection succesfull')})
.catch((err) => {
    console.log('Databse connection issue');
    console.error(err);
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}