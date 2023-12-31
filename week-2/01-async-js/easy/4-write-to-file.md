## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

fs = require("fs");

let dataNeedToBeWritten = "hey,there I am prakhar deep";
function readAndWrite()
{
   <!-- function to read the file -->
   <!-- fs.readFile("./path","utf-8",function(err,data)
    {
        if(err)
        {
            console.log("Got error while reading the file",err);
            continue;
        }
        console.log(data);
    })  -->
    fs.writeFile("./path",dataNeedToBeWritten,"utf-8",function (err){
        if(err)
        {
            console.log("Got the error while written in the file");
            continue;
        }
        console.log("successfully written in the file");
    })
}