const jwt = require('jsonwebtoken');
const jwtPassword = 'krishna6431';
const zod = require("zod");

//schema for verification
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameRes = emailSchema.safeParse(username);
    const passRes = passwordSchema.safeParse(password);
    if (!usernameRes.success || !passRes.success) {
        return null;
    }
    const signature = jwt.sign({
        username: username
    }, jwtPassword);
    return signature;
}

function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword)
    }
    catch (err) {
        ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    }
    else {
        return false;
    }
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
