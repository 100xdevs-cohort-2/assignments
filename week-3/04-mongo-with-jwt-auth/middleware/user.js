function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodeValue = jwt.verify(jwtToken, jWT_SECRET);

    if (decodeValue.username){
        req.username = decodeValue.username;
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;