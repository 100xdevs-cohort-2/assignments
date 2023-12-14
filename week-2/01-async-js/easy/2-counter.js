// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(maxCount) {
    let count = 0;
  
    const increment = () => {
      if (count < maxCount) {
        count++;
        console.log(count);
        // Schedule next increment
        setTimeout(increment, 1000);
      }
    };
  
    increment();
  }
  
  counter(10);
  