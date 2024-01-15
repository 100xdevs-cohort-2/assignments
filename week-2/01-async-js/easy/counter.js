let i = 0;
setInterval(() => console.log(++i, "using setInterval"), 1000); // using setInterval

let count = 0;
function counter() {
  count++;
  console.log(count, "using setTimeOut");
  setTimeout(counter, 1000);
}
counter(); // using setTimeOut
