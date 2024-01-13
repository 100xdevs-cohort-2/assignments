const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('your-mongodb-url');
mongoose.connect("mongodb+srv://Keshav_123:<password>@cluster0.botjc.mongodb.net/?retryWrites=true&w=majority");

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: "String",
    password: "String"
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: "String",
    password: "String"
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: "String",
    description: "String",
    image: "String",
    price: "Number",
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}