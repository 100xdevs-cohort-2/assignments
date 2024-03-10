const currentDate = new Date();
let hrs = currentDate.getHours();
let min = currentDate.getMinutes();
let sec = currentDate.getSeconds();
min=59
sec=55
hrs=11
setInterval(() => {
  if (sec < 59) sec++;
  else {
    sec=0;
    if (min < 59) min++;
    else {
      hrs++;
      if (hrs > 24) {
        min = 0;
        hrs = 0;
        sec = 0;
      }
      min = 0;
    }
  }
//   console.log(" HH:MM::SS :- " + `${hrs} : ${min} : ${sec}`);
  if(hrs<=12)
  console.log(" HH:MM::SS :- " + `${hrs} : ${min} : ${sec} AM`);
else
console.log(" HH:MM::SS :- " + `${hrs-12} : ${min} : ${sec} PM`);
}, 1000);
