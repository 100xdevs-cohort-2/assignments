const zod=require('zod');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

function validAuthStructure(username,password){

    const schema=zod.object({
        username:zod.string(),
        password:zod.string().min(3),
    })
    return schema.safeParse({username,password}).success
}

function getHashedPassword(password){
    return bcrypt.hashSync(password,10);
}

function getToken(username,role){
    const SECRET=role=='ADMIN'?process.env.ADMIN_SECRET:process.env.USER_SECRET;
    return jwt.sign({username},SECRET);
}

module.exports={validAuthStructure,getHashedPassword,getToken};