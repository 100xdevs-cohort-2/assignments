## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let ctr = 0;

function counter(n) {
    if(n==0) return;
  setTimeout(function () {
    counter(n - 1);
  }, 1000);

    console.log(++ctr);
  
}

counter(10);