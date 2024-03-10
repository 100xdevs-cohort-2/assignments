## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

### Solution JS code 

```js
let seconds = 0;

const mySetTimeout = function(callback){
    console.log(seconds);
    seconds++;
    setTimeout(mySetTimeout, 1000);
}

mySetTimeout();

```


































































(Hint: setTimeout)
