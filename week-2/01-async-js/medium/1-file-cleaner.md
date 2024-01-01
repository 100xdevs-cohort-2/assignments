## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
fs = require("fs");
function removeExtraSpace(){
     fs.readFile("./path","utf-8",function(err,data){
        if(err)
        {
            console.log(err);
            continue;
        }
        let d=data.replace("/\s+/g"," ");<!--replace the extra space with single space  -->
        <!-- let write the modified data in file using writeFile method -->
        fs.writeFile("./path",d,"utf-8",function (err){
            if(err)
            {
                console.log("err while writting in the file");
            }
            console.log("successfully written in the file");
        })

     })
}