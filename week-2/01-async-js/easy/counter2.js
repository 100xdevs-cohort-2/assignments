let a = 1;
function interval() {
  console.log(a);
  a++;
  setTimeout(interval, 1000);
}
setTimeout(interval, 1000);
