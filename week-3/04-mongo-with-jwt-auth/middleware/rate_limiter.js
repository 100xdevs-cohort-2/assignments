
const { decodeJwt } = require('../jwt');

let reqPerUser={};

setInterval(() => {
    reqPerUser={};
}, 1000);


function rateLimiter(req,res,next) {

    console.log("request reached to rateLimiter");

    if (req.hasOwnProperty('authorization')) {
        let token = req.headers.authorization;
        var user = decodeJwt(token);
    }
    else{
        var user = req.headers.username;
    }   

    if(!reqPerUser.hasOwnProperty(user)){
        reqPerUser[user] = 0;
    }

    reqPerUser[user]++;
    if(reqPerUser[user]>=5){
        res.status(404).send("too many requests. Try again");
        return;
    }

    next();
}

module.exports = rateLimiter;