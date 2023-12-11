// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function printTime(){
    date=new Date();
    curTimeString=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(curTimeString)
}

// v1

function customSetInterval1(callback,duration){
    setTimeout(()=>{
        callback();
        customSetInterval1(callback,duration);
    },duration)

}
// customSetInterval1(printTime,1000);

// v2

function sleep(duration){
    return new Promise((res,rej)=>{
        setTimeout(()=>res(),duration)
    })
}

async function customSetInterval2(callback,duration){
    while(true){
        await sleep(duration);
        callback();
    }
}

// customSetInterval2(printTime,1000);

module.exports={customSetInterval2};
