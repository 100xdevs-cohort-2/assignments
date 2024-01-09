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

const fs = require('fs');

function prayag(cb){
  fs.readFile("a.txt", "utf-8", function(err,data){
    cb(data);
  });
}

function Ondone(data){
  let s = data.replace(/\s+/g, ' ');
  console.log(s);
  fs.writeFile("a.txt",s, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

prayag(Ondone);

