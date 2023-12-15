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

```javascript
const fs = require("fs");
fs.readFile("./something.txt", "utf-8", (err, data) => {
  write(data);
});

function write(data) {
  finalData = "";
  let words = data.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") continue;
    finalData += `${words[i]} `;
  }
  fs.writeFile("./something.txt", finalData.trim(), (err) => err);
}
```
