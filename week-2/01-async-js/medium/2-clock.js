function Clock1() {
  setInterval(function () {
    console.log(
      new Date().getHours() +
        " : " +
        new Date().getMinutes() +
        " : " +
        new Date().getSeconds()
    );
  }, 1000);
}

function Clock2() {
  setInterval(function () {
    let timeZone =
      12 < new Date().getHours() && new Date().getHours() > 0 ? "PM" : "AM";
    let Hour12;
    if (timeZone === "PM") {
      Hour12 = new Date().getHours() - 12;
    } else {
      Hour12 = new Date().getHours();
    }
    console.log(
      Hour12 +
        " : " +
        new Date().getMinutes() +
        " : " +
        new Date().getSeconds() +
        " " +
        timeZone
    );
  }, 1000);
}

Clock2();
