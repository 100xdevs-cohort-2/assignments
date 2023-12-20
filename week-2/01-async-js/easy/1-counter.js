// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

//using setTimeout:
function userCounter(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

userCounter(1000).then(function () {
  console.log("hogaya 1sec");
});

//using setInterval:

// setInterval(function () {
//   console.log("ram chandra");
// }, 1000);
