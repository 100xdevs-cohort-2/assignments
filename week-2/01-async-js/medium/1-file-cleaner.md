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



const fs = require("fs")


fs.readFile("abx.txt", "utf-8", (err,data) =>{
    if(err){
        console.log(err)
        return
    }
    let newData = data.replace(/\s+/g, ' ')



fs.writeFile("abx.txt", newData ,"utf-8", (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log("wrote successfully")
})
})