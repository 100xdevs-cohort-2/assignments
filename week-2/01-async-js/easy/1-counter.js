function counter(n) {
  let c = 0;

  let counter = setInterval(() => {
    c = c + 1;
    console.log(c);

    //since this is an async function, a while loop will not work
    if (c === n) {
      clearInterval(counter);
    }
  }, 1000);
}

counter(50);

/*
Adding a while loop inside the setInterval callback is generally not recommended because it can lead to blocking the event loop and causing the application to become unresponsive. The setInterval function itself is designed to repeatedly execute a function at a specified interval, and introducing synchronous BLOCKING operations like a while loop can interfere with the asynchronous nature of JavaScript which is why it will throw an error or heap mem will go out of stack.
*/
