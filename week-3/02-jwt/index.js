const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwtPassword = 'secret';

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (usernameResponse.success && passwordResponse.success)
        return jwt.sign({ username }, jwtPassword);
    return null;
}

function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true;
    }
    catch (e) {
        return false;
    }
}

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded)
        return true;
    return false;
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
