## Counter without setInterval

Without using setInterval, try to code a counter in Javascript.

### Solution
```js
let count = 0;

function counter() {
    console.log(count++);
    setTimeout(counter, 1000);
}

counter();
```