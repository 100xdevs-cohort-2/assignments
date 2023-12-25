const z = require('zod');

const emailSchema = z.string().email();
const passSchema = z.string().min(6);

function performChecks(req,res, next) {
    console.log("request reached to format validator middleware");
    
    let email = req.body.username;
    let pass = req.body.password;
    
    if (!emailSchema.safeParse(email).success) {
        res.status(404).json({message: "wrong e-mail format"});
        return;
    }
    
    if (!passSchema.safeParse(pass).success) {
        res.status(404).json({message: "wrong password format"});
        return;
    }
    next();
}


module.exports= performChecks;