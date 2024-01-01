## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


fs = require("fs");
function readOutFileAAndTodoExpensiveOp()
{
    fs.readFile("./path","utf-8",function (err,x){
    if(err)
    {
        console.log("error while reading the file ",err );
        continue;
    }
    console.log(x);
});
    extraOperation();
}
function extraOperation()
{
    <!-- checking number isPrime or not -->
    <!-- code -->
}

