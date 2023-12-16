/*## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

function count2(interval = 1000, count = 0) {
  setTimeout(function () {
    console.log(count++);
    count2(interval, count);
  }, interval);
}
count2();
