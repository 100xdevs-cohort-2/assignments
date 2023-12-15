<!-- ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file. -->

<!-- For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` -->
const fs = require('fs');
fs.readFile('File.txt','utf-8',(err,FileContent)=>{
    if(err)
    {
        console.log("Error in finding the file");
    }
    else
    {
      let arr = [];
      let str="";
      for(let i=0;i<FileContent.length;i++)
      {
         if(FileContent[i]!=' ')
         {
          str+=FileContent[i];
         }
         else
         {
            arr.push(str);
            str="";
            while(FileContent[i]==' ')
            {
              i++;
            }
            i--;
         }
      }
      if(str.length!=0)
      arr.push(str);

      console.log("Array:");
      for(let i=0;i<arr.length;i++)
      console.log(arr[i]);
      let updatedContent = "";
      for(let i=0;i<arr.length;i++)
      {
          updatedContent+=arr[i];
          updatedContent+=' ';
      }
      console.log("data: ",updatedContent);
    }
})


