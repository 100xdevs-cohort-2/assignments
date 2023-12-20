start = new Date();
let a = 0;
while (true) {
  curr = new Date();
  if (curr.getTime() - start.getTime() >= 1000) {
    start = new Date();
    a += 1;
    console.log(a);
  }
}
