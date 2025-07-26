//Medium
//File Cleaner

// Q1 

// const orignalString = "Hi   my name is   vansh";
// const transformedString = orignalString.split(/\s+/).join(" ").trim();
// console.log(transformedString);

// Q2

// let initialHour = 23;
// let initialMinute = 59;
// let initialSecond = 55;

// setInterval(clock,1000);

// function clock()
// {
//     let timeValue ="";

//     if(initialHour >=0 && initialHour<12)
//     {
//         timeValue = "AM"
//     }
//     else if(initialHour>=12 && initialHour<24)
//     {
//         timeValue = "PM"
//     }

//     console.log(initialHour+":"+initialMinute+"::"+initialSecond+" "+timeValue);

//     if(initialSecond>=59)
//     {
//         initialMinute++;
//         initialSecond=0;
//     }

//     if(initialMinute>59)
//     {
//         initialHour++;
//         initialMinute=0;
//     }

//     if(initialHour>=24)
//     {
//         initialHour=0;
//     }

//     initialSecond++;

// }