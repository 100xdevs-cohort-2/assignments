const jwt = require('jsonwebtoken')
const secret = "secret123"

function verifyJwt(token) {
    let a = true;
    try {
        jwt.verify(token, secret)
    } catch (e) {
        a = false
        console.log(e.name)
    }
    return a;
}

const result = verifyJwt("adosdfhioghwrioghbwrioghb")
console.log(result)