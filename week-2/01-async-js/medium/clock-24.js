// Clock using setInterval 
function currentMachinetime(){
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}::${date.getSeconds()}`);
    //callback
    setTimeout(function(){
        currentMachinetime();
    },1000);
}
currentMachinetime();