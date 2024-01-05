Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

### Solution JS code:
//Hey! I was stuck in this problem and I came across your code and it actually helped me out!. The logic is absolutely correct but still the format has to be followed for displaying the time.
//So here are some add ons from my side !

```js

function displayTime() {
    setTimeout(() => {
        let d = new Date();
        let meridian = d.getHours() >= 12 ? "PM" : "AM";
        let hour = d.getHours() === 12 ? d.getHours() : d.getHours()%12;
        const formattedHours = hour < 10 ? `0${hour}` : hour;
         const formattedMinutes =
         d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
         const formattedSeconds =
         d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
        console.clear();
        console.log(
      formattedHours +
        ":" +
        formattedMinutes +
        ":" +
        formattedSeconds +
        " " +
        meridian
    );
        displayTime();
    }, 1000)
}

displayTime();

```
