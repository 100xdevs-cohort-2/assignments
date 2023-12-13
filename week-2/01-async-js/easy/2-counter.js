// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function delay() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async function counterWithoutSetInterval(start) {
    await delay();
    console.log(start++);
    if(start<=10)
    {
    counterWithoutSetInterval(start);
    }
  }
  counterWithoutSetInterval(0);





































































// (Hint: setTimeout)