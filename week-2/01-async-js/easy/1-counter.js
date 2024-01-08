var count = 0;
const displayTime = () => {
       count++;
       console.log(count);
}


let counter = setInterval(displayTime, 1000);

setTimeout(() => {
   clearInterval(counter);
}, 10000)

