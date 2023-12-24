const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://flutterydev:Allem%40080603@learn.kobcnq7.mongodb.net/user_app?retryWrites=true&w=majority");
 

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courses: [{
        type:mongoose.Schema.Types.ObjectId,
        autopopulate:true,
        ref:'Course',
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}