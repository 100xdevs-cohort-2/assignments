

 function updateClock() {
  const now = new Date();

  
  const formattedTime24 = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;


  const formattedTime12 = `${padZero(now.getHours() % 12 || 12)}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${now.getHours() < 12 ? 'AM' : 'PM'}`;

  
  console.log(`24-Hour Format: ${formattedTime24}`);
  console.log(`12-Hour Format: ${formattedTime12}`);
}

function padZero(number) {
  return number < 10 ? '0' + number : number;
}

let counter = 0;


function startClock() {
  setInterval(() => {
    updateClock();
    counter++;
  }, 1000);
}


updateClock();


startClock();


const stopTime = 10;
setTimeout(() => {
  clearInterval(startClock);
  console.log(`Clock stopped after ${stopTime} seconds.`);
}, stopTime * 1000);
