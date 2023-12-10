//a basic counter, increasing the count by 1 with each second.

let  counterValue = 0 ;
setInterval(() => {
  console.clear();
  console.log("Count: "+counterValue);
  counterValue++;
}, 1000)