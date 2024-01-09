let timer = 0;

function mycount(n) {
  if (timer == n) return;
  console.log(timer);
  timer++;
  setTimeout(() => mycount(n), 2000);
}
mycount(5);
