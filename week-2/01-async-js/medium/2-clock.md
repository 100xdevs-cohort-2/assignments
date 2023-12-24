Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

### Solution JS code:

```js

function displayTime() {
    setTimeout(() => {
        let d = new Date();
        let meridian = d.getHours() >= 12 ? "PM" : "AM";
        let hour = d.getHours() === 12 ? d.getHours() : d.getHours()%12;
        console.clear();
        console.log(hour + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + meridian);
        displayTime();
    }, 1000)
}

displayTime();

```
