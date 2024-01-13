var count = 0;
const displayTime = () => {
       count++;
       console.log(count);
       if(count<10)
       {
        setTimeout(displayTime, 1000)
       }
}

displayTime();




