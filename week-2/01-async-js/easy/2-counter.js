// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




// did not worked :( 
// function counter(){
//     for(i = 0; i<10; i++)
//     {
//        setTimeout(() => {
//         console.log(i);
//        }, 1000);
//     }
// }

// counter();


let counter = 0
let countDown = setTimeout(function tick(){
    //console.log(countDown);
    console.log(counter++);
    setTimeout(()=>{
        if(counter<=10){
            tick();
        }
        }, 1000) }, 1000);



























































// (Hint: setTimeout)