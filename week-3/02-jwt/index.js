const jwt = require('jsonwebtoken');
const jwtPassword = "secret"; // Replace 'secret' with your JWT secret
const zod = require('zod');

const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

const jwtSchema = zod.string().regex(/^[\w-]+\.[\w-]+\.[\w-]+$/);

function isJWTString(str) {
    return jwtSchema.safeParse(str).success;
}

function signJwt(username, password) {
    const validationResult = schema.safeParse({ username, password });
    if (!validationResult.success) {
        return null;
    }

    let token = jwt.sign({ "username": username }, jwtPassword);
    return token;
}


function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true; 
    } catch (error) {
        return false; 
    }
}

function decodeJwt(token) {
    try {
        let decoded = jwt.decode(token);
        if (typeof decoded === 'object' && decoded !== null) {
            return true;
        } else {
            return false; // Return false for non-JWT strings
        }
    } catch (error) {
        return false; 
    }
}


// signJwt("shiladitya@gmail.com", jwtPassword);
verifyJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoaWxhZGl0eWFAZ21haWwuY29tIiwiaWF0IjoxNzAzMDYwNDg4fQ.WYwX7Cr8uKhWGXtePxExed_xEpbzXd25SiRW3Vd_w7A');

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
};
