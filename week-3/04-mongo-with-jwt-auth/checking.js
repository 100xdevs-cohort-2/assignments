
const jwt = require('jsonwebtoken');
const JWT_SECRET = '123445666';
//const jwt_token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vy'bmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTU1ODc1fQ.BfdjaNfdpJ4DwbpJkhv3X95k7ZMEdjfjc35wJvyw-EE";
const value={
    name:"Subesh",
    class: "htra"
}
//const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTYwOTA5fQ.Ur5xbSDw8IVAIgy6xlQC0Mp5dmocR3PJqhUvQza8tnA",JWT_SECRET);
//console.log(token);

try{
    console.log("start1");
    const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTYwOTA5fQ.Ur5xbSDw8IVAIgy6xlQC0Mp5dmocR3PJqhUvQza8tnA",JWT_SECRET);
    console.log(token);
    console.log("check");
    //console.log(decode);
    if(token.username){
        console.log("check11");
    }else {
        res.status(403).json({
            message: "Not authenticated"
        })
    }
}catch(e){
    res.json({
        message: "Incorrect inputs"
    })
}
//console.log(jwt.verify(jwt_token,JWT_SECRET));

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3ViZXNoIiwiY2xhc3MiOiJodHJhIiwiaWF0IjoxNzA0OTYwNjYwfQ.PoBpC_VEkHzavyaXQH9spBh8frO5nmTyXRNI4nIhXfU
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTYwOTA5fQ.Ur5xbSDw8IVAIgy6xlQC0Mp5dmocR3PJqhUvQza8tnA"
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTYwOTA5fQ.Ur5xbSDw8IVAIgy6xlQC0Mp5dmocR3PJqhUvQza8tnA"
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTYwOTA5fQ.Ur5xbSDw8IVAIgy6xlQC0Mp5dmocR3PJqhUvQza8tnA"