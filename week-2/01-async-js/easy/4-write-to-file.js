/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs  = require('fs');

const filepath = 'C:/Users/MIHIR/Desktop/git-cohort/week-2/01-async-js/medium/file.txt';


const dataToAppend = "Hi There !!!";

fs.writeFile(filepath ,dataToAppend, { flag: 'a', encoding: 'utf8' }, (err,data)=>
{
    if(err)
    {
        console.error("Error while trying to write the file: ", err );
        return;
    }
    else
    {
        console.log('Data appended to file successfully.');
    }
});


fs.readFile(filepath, 'utf-8', (err, data)=>
{
    if(err)
    {
        console.error("Error while trying to read the file: ",err);
        return;
    }
    console.log(data);
});
