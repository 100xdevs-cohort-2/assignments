const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.jwt_secret;

function sign(payload) {
    return jwt.sign(payload, secret);
}

function verify(token) {
    try {
        return jwt.verify(token, secret);
    }
    catch (e) {
        return null;
    }
}

module.exports = { sign, verify };