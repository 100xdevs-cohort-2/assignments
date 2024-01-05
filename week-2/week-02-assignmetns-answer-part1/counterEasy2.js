// function startCounter(count) {
//   console.log(count);

//     if (count < 10) {

//   setTimeout(function () {
//     startCounter(count + 1);
//   }, 1000);
//     }
// }

// startCounter(1);

function counter(count) {
  console.log(count);
  if (count < 10) {
    setTimeout(function () {
      counter(count + 1);
    }, 1000);
  }
}
counter(1);
