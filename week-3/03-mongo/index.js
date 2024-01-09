const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');


//Middlewares for parsing request bodies

app.use(bodyParser.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter)

// The reason why we are doing this is because
// in "adminRouter" , we defined the endpoints as "/signup" , "/courses", 
// but in the original problem statement we were asked to do 
// "/admin/signup" , "/admin/courses" , that is why we have made use of router.






const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);

});