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


const fs = require('fs')
fs.readFile('./easy/a.txt','utf-8',(err,data)=>{
    if(err){
       console.log(err)
    }

    if(data){
        console.log(data)
        let data1 = data.split(/\s+/).join(' ')
        console.log(data1)
        fs.writeFile('./easy/a.txt',data1,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }
            if(data){
                console.log(data)
            }
        })
    }
})