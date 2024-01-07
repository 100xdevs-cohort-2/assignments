## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```javascript
let counter = 0;
function interval(fn, delay) {
  function innerFn() {
    fn();
    setTimeout(innerFn, dealy);
  }
  innerFn();
}

interval(() => {
  console.log(counter);
  counter += 1;
}, 1000);
```

(Hint: setTimeout)
