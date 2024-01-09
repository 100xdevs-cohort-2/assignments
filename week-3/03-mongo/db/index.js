const mongoose = require('mongoose');

// Connect to MongoDB
async function connectDB(){
   try{
        await mongoose.connect('mongodb+srv://yashginoya_:yashginoya2402@cluster0.gpdycqd.mongodb.net/CoursesDB');
        // await mongoose.connect('mongodb://localhost:27017/abcd');
        console.log("connected to DB");
    }
    catch(e)
    {
        console.log("there is some errro connecting to the DB")
    }
}
connectDB();
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
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
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
    Course
}