## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```Javascript
 const counter = () => {
    let time = 0;
    let active = true;
    const incrementTime = setTimeout(() => {
        if(!active) return;
        time++;
        console.log(time);
        setTimeout(incrementTime, 1000);
    }, 1000);
    return {
        getTime: () => null,
        stop: () => {active = false;}
    }
 }
const myCounter = counter();
myCounter.getTime();
```

(Hint: setTimeout)
