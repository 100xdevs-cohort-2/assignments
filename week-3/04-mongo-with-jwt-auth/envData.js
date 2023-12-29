const dotenv = require('dotenv');

// Configure dotenv to load variables from .env file
const result = dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

// console.log(MONGODB_URI, DB_NAME, JWT_SECRET_KEY)

module.exports = {
    MONGODB_URI,
    DB_NAME,
    JWT_SECRET_KEY
}