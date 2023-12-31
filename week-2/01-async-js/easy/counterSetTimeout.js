let i = 0;
setTimeout(() => {
  i++;
  console.log(i);
  setTimeout();
}, 1000);
