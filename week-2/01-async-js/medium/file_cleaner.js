
let fs = require("fs");
const { flatten } = require("mathjs");
let p = new Promise(function(resolve , reject){
    fs.readFile("medium/textData.txt" , "utf-8" , function(err , data){
        if(err){
            console.log("something went wrong");
            reject("not able to access the file");
        }
        else{
            resolve(data);
        }
    })
})
function removeExtraSpace(str)
{
    const lines = str.split('\n').filter(line => line.trim() !== '');
    let newarr = [];
    lines.forEach(function(line , lineNumber){
        line = line.trim();
        let n = line.length;
        let i  = 0 ;
        let result = "";
        while(i <  n)
        {
            while(line[i] == ' '){
                i++;
            }
            result+= ' ';
            while(i < n && line[i]!=' '){
                result += line[i];
                i++;
            }
        }
            result = result.trim();
            newarr.push(result);
        })
    
    return newarr;
}
async function solve(){
    let originalText = await p ;
    let finalText = await removeExtraSpace(originalText);
    const modifiedContent  = finalText.join('\n');
    fs.writeFile("medium/textData.txt", modifiedContent, function(err){
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Strings written to file successfully.');
        }
      });
}

solve();
