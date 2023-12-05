/*
  Create a terminal clock.
  Note: Press ctrl+C to stop executing.
*/

let timerId;

function activateClock() {
  let timerId = setInterval(() => {
    let date = new Date();
    console.log(
      `${date.getHours()} Hrs : ${date.getMinutes()} Mins : ${date.getSeconds()} secs`
    );
  }, 1000);
}

activateClock();
