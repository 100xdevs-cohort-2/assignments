/*
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require("fs");

fs.readFile("week-2/01-async-js/medium/1-a.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Error while reading the file:", error);
    return;
  }

  let content = data.replace(/\s+/g, " ");
  console.log("content:", content);

  fs.writeFile("week-2/01-async-js/medium/1-a.txt", content, "utf-8", (error) => {
    if (error) {
      console.error("Error writing to file:", error);
      return;
    }
    console.log("File has been written successfully.");
  });
});
