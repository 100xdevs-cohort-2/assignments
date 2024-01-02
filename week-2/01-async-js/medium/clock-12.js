// Clock using setInterval 
function currentMachinetime(){
    setInterval(function(){
        let date = new Date();
        let hours12 = date.getHours();
        console.log(`${hours12 % 12 || 12}:${date.getMinutes()}::${date.getSeconds()}${(hours12 > 12) ? ' PM' : ' AM'}`);
    },1000);
}
currentMachinetime();