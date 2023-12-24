// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. 

async function counter (time){
    await setTimeout(()=>{
        console.log(time);
        counter(++time);
    }, 1000);
}


counter(0);