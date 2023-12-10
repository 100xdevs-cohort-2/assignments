## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

### Solution

```
const count = (n) => {
    for (let i = 1; i < n; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
};

count(10);
```







































































(Hint: setTimeout)