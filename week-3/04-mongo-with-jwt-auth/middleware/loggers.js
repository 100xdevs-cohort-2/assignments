
let reqCount = 0;
let errCount =0;

function reqLogger(req,res,next) {

    console.log("request reached to reqLogger", ++reqCount);

    next();
}

function errLogger(err,req,res,next) {

    console.log("request reached to errLogger", errCount);

    errCount++;
    res.status(500).json(err);
}

module.exports = {reqLogger,errLogger, errCount, reqCount}