// const date = new Date();
// let hrs = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// // initial time
// // console.log(hrs + " : " + minutes + " : " + seconds);

// let counter = 1;
// updateTimer = () => {
//   if (hrs >= 12) {
//     console.log(hrs + " : " + minutes + " : " + seconds + " PM");
//   } else {
//     console.log(hrs + " : " + minutes + " : " + seconds + " AM");
//   }
//   seconds++;
//   if (seconds === 60) {
//     minutes++;
//     seconds = 0;
//   }
//   if (minutes === 60) {
//     hrs++;
//     minutes = 0;
//   }
// };

// const interval = setInterval(updateTimer, 1000);

function twentyFourHourClock(){
    console.log('24-hrs clock');
    setInterval(()=>{
        const date = new Date();
        console.log(`HH:${date.getHours()}MM:${date.getMinutes()}SS:${date.getSeconds()}`);
    },1000)
}

function twevleHrClock(){
    console.log('12-hr clock');
    setInterval(()=>{
        const date = new Date();

        let HH = date.getHours();
        let MM = date.getMinutes();

        console.log(`${HH%12}:${MM}:${date.getSeconds()}${HH<12?'AM':'PM'}`);
    },3000)
}
twevleHrClock()