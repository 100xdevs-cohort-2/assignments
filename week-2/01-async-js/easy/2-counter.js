// Without using setInterval, try to code a counter in Javascript.
// There is a hint at the bottom of the file if you get stuck.

let ctr = 0;
let timeout = null;
function counter() {
  ctr++;
  console.log(ctr);
  timeout = setTimeout(counter, 1000);
  if (ctr == 5) clearTimeout(timeout);
}

counter();
