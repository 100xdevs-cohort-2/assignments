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

### Solution
```js
const fs = require("fs");

// using string methods
function clean(str) {
  let cleaned = [];
  let tmp = str.split(" ");
  for(word of tmp) {
    if(word !== '') cleaned.push(word);
  }

  return cleaned.join(" ");
}

// raw string parsing logic
function cleaner(str) {
    let cleaned = "";
    let space_count = 0;
    for(char of str) {
        if(char !== ' ') {
            cleaned += char
            space_count = 0;
        } else {
            space_count++;
            if(space_count <= 1) cleaned += char;
        }
    }

    return cleaned;
}

fs.readFile("abc.txt", 'utf-8', (err, data) => {
  if (err) throw err;
  else {
    fs.writeFile("abc.txt", clean(data), (err, _) => {
        if (err) throw err;
        else console.log("Write complete.");
    });
  }
});

```
