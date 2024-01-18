// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter=0;

function count(val){
   for(let i=0;i<val;i++){
    setTimeout(async()=>{
        counter++;
        await console.log(counter)
    },1000)
   }
}


count(100)


















































// (Hint: setTimeout)