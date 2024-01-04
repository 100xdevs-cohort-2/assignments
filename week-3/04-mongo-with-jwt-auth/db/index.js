const mongoose = require('mongoose');

// Connect to MongoDB
async function connectDB(){
    await mongoose.connect('mongodb+srv://yashginoya_:yashginoya2402@cluster0.gpdycqd.mongodb.net/Course_Selling_App');
    console.log("Connected to DB");
}
connectDB();
// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourse : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title :String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    connectDB
}
