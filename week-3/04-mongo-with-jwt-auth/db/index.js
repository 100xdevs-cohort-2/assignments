const mongoose = require('mongoose');
const config = require('../utils/config');

console.log('MongoDB URI: ', config.MONGODB_URI);

// Connect to MongoDB
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) =>
    console.error(`error connected to MongoDB: ${error.message}`)
  );

// Define schemas
// INFO: passwords are stored temporarily
// TODO: store has, do it later
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: { required: true, type: String, minLength: 3 },
  password: { required: true, type: String, minLength: 6 },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: { required: true, type: String, minLength: 3 },
  password: { required: true, type: String, minLength: 6 },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageLink: {
    type: String,
    required: true,
    minLength: 3,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
});

AdminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

CourseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
