"use strict";

function countUp(endNumber) {
  let a = 1;

  const counter = setInterval(() => {
    if (a >= endNumber) clearInterval(counter);
    console.log(a);
    a++;
  }, 1 * 1000);
}

countUp(5);
