Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

### Solution
```js
const date = new Date();
let hr = date.getHours();
let min = date.getMinutes(); 
let sec = date.getSeconds();

function incr() {
    if(sec === 60) {
        sec = 0;
        min++;
    } else sec++;

    if(min === 60) {
        min = 0;
        hr++;
    }

    console.log(hr + ":" + min + ":" + sec);
}

setInterval(incr, 1000);
```