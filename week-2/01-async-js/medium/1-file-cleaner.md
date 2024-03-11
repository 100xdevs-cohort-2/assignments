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


let dataFromFiles = "";
let newData = "";

function removeSpaces(inputString) {
    return inputString.replace(/ +/g, ' ');
}

fs.readFile('/media/nayan/Core 1/Javascript/Web_Dev/COHORT/class-2.1/Texting.txt', 'utf8', (error, data) => {
    if (error != null){
        log.error("We got error");
    } else {
    dataFromFiles = data;
    newData = removeSpaces(dataFromFiles);
    console.log(`Data to Add : ${newData}`);
    fs.appendFile('/media/nayan/Core 1/Javascript/Web_Dev/COHORT/class-2.1/Texting.txt', newData, (err, data) => { 
     });
    }
})

