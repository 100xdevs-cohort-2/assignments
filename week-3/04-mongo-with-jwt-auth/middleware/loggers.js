
let reqCount = 0;
let errCount =0;

function reqLogger(req,res,next) {
    reqCount++;
    next();
}

function errLogger(err,req,res,next) {
    errCount++;
    res.status(500).json({err:err.messsage});
}

module.exports = {reqLogger,errLogger}