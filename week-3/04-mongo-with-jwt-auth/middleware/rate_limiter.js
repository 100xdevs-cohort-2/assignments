const jwt = require('jsonwebtoken');

let reqPerUser={};

setInterval(() => {
    reqPerUser={};
}, 1000);


function rateLimiter(req,res,next) {
    
    if (req.hasOwnProperty('Authorization')) {
        let token = req.headers.Authorization;
        var user = jwt.decode()
    }
    else{
        var user = req.headers.username;
    }   
    if(!reqPerUser.hasOwnProperty(user)){
        reqPerUser[user] = 1;
        next();
    }
    reqPerUser[user]++;
    if(reqPerUser[user]>=5){
        res.status(404).send("too many requests. Try again");
    }
}

module.exports = rateLimiter;