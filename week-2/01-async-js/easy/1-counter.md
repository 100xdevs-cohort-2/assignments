## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

```Javascript
const counter = () => {
    let time = 0;
    const incrementTime = setInterval(() => {
        time++;
    }, 1000);
    const showTime = setInterval(() => {
        console.log(time)
    }, 1000);

    return {
        getTime: () => null,
        stop: () => {clearInterval(incrementTime); clearInterval(showTime);}
    };
}
const myCounter = counter();
setInterval(() => myCounter.getTime(), 1000);

```
