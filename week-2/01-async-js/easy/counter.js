"use strict"; 
// Count from 1 to n 
let i = 1; 
const counter = function(n)
{
   let print = setInterval(function()
   {
     console.log(i++); 
     if(i>n)
     clearInterval(print); 
   },1000);
}; 

counter(7); 