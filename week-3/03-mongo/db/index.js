const mongoose = require('mongoose');

// Connect to MongoDB
<<<<<<< HEAD
mongoose.connect('mongodb+srv://angrybrothers02:gBVAfVYJvZhktlCO@cluster0.gwetxoo.mongodb.net/Course_Website');
// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{type: String},
    password:{type: String}
   
});

const UserSchema = new mongoose.Schema({
    username:{type: String,required: true},
    password:{type: String,required:true}
    
});

const CourseSchema = new mongoose.Schema({
    id:{
       type:Number,
        
    },
     title: {
        type:String,
        required: true
     },
      description:{
        type:String,
        required: true
      }
       , 
      price: {
          type:Number,
          required:true
      }, 
      imageLink:{ 
        type:String, 
        required:true },
        
        published: {
            type: Boolean,
            default: false,
          }
});
const purchasedCourseSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    purchaseDate: { type: Date, default: Date.now },
});

const PurchasedCourse = mongoose.model('PurchasedCourse', purchasedCourseSchema);


=======
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

>>>>>>> origin/master
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
<<<<<<< HEAD
    Course,
    PurchasedCourse
=======
    Course
>>>>>>> origin/master
}