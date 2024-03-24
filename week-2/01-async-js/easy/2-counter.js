/*
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

async function startCounter(){
  let count = 0;
  while(true){
    console.log(`Count : ${count}`);
    count++;
    await sleep(1000);
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

startCounter();
































































// (Hint: setTimeout)