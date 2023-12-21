const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kedar:BT4wnkopzEhXCqMu@cluster0.ufsetpy.mongodb.net/coursellingapp').then(res=>console.log("connected to mongo"));

// Define schemas
const AdminSchema = new mongoose.Schema({
    
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    id:String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: String,
    imageLink: String,
    CourseID:String


});
const purchasedCourses = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: String,
    imageLink: String,
    CourseID:String


});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const Purchased = mongoose.model('purchasedCourses', purchasedCourses);


module.exports = {
    Admin,
    User,
    Course,
    Purchased
}