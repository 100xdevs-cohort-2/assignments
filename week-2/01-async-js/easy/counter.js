let count = 0;
const incremnet = () => {
  count++;
  console.log(count);
};

// setInterval(incremnet,1000);
let counter = setInterval(incremnet, 1000);

setTimeout(() => {
   clearInterval(counter);
}, 10000)
