const mongoose = require('mongoose');

// Connect to MongoDB
const connectTomongo = async ()=>{
    try{
        await mongoose.connect('<MONGO URL GOES HERE>');
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Error connecting to MongoDB")
    }
}

connectTomongo();

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: 
    {
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }

});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    img: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}