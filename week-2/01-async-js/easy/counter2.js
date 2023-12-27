"use strict";

let a = 1;

function countUp(endNum) {
  const timer = setTimeout(() => {
    console.log(a);
    a++;

    countUp(endNum);
  }, 1 * 1000);

  if (a > endNum) clearTimeout(timer);
}

countUp(5);
