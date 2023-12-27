const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://manoj:Manoj%40123@cluster0.sdisndk.mongodb.net/mongo-test-db');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {type:String,required:true,immutable:true},
    password: {type:String,required:true},
    isAdmin:{type:String,required:true,immutable:true}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {type:String,required:true,immutable:true},
    password: {type:String,required:true},
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});
const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    imageLink: {type:String},
    published:{type:Boolean},
    owner:mongoose.SchemaTypes.ObjectId
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}