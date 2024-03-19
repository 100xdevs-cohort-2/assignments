/*Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. */

const fs  = require('fs');

const filepath = 'C:/Users/MIHIR/Desktop/git-cohort/week-2/01-async-js/medium/file.txt';


fs.readFile(filepath, 'utf-8', (err, data)=>
{
    if(err)
    {
        console.error("Error while trying to read the file: ",err);
        return;
    }
    console.log(data);
});

let sum  = 0;
for(i = 0; i< 100000000; i++)
{
    sum+= i;
}
console.log("expensive operation completed");