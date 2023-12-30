// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// let counter = function(){
//     let num = 10;
//     let countDown = setInterval(function(){
//         console.log(num);
//         num--;
//         if(num < 0){
//             clearInterval(countDown);
//         }
//     }, 1000)
// }
// counter();




// let counter = function ()
// {
//     let num = 0;
//     let countDown = setInterval(function(){
//         console.log(num);
//         num++;
//         if (num >=10) {
//             Exit;
//         }
//     }, 1000)
// }

// counter();


//lets simplyfy that code a bit 


//variable initial 


let init = 0


let counter = function(){
   let countDown =  setInterval(()=>
    {
     console.log(init++)

    // exit of set interval 
    // if (init > 10)
    // {
    //     clearInterval(countDown);
    // }
    } ,1000)

    setTimeout(()=>{ clearInterval(countDown)}, 5000)
    
}

counter();




