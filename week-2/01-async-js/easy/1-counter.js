// function counter(n) {
//   let i = n;
//   const interval = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 10) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// counter(2);

let count = 0;
function increment() {
  if (count >= 10) {
    clearInterval(interval);
    console.log("COUNTER COMPLETE");
    return;
  }
  count ++;
  console.log(count);
}

const interval = setInterval(increment, 1000)